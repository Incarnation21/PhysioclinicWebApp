import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { LogOut, Calendar, Phone, FileText, Mail, MessageSquare, Send } from "lucide-react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "../config/firebase";

interface Appointment {
  _id: string;
  patientName: string;
  contactNumber: string;
  service: string;
  appointmentDate: string;
  appointmentTime: string;
  notes: string;
  status: string;
  assignedTo?: string;
  createdAt: string;
}

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'appointments' | 'contacts'>('appointments');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/admin");
      } else {
        if (activeTab === 'appointments') {
          fetchAppointments();
        } else {
          fetchContacts();
        }
      }
    });

    return () => unsubscribe();
  }, [activeTab, navigate]);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "appointments"));
      const apts: Appointment[] = querySnapshot.docs.map(doc => ({
        _id: doc.id,
        ...doc.data()
      } as Appointment));
      // Sort by descending createdAt
      apts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setAppointments(apts);
    } catch (error) {
      toast({ title: "Error loading appointments", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      const msgs: ContactMessage[] = querySnapshot.docs.map(doc => ({
        _id: doc.id,
        ...doc.data()
      } as ContactMessage));
      // Sort by descending createdAt
      msgs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setContacts(msgs);
    } catch (error) {
      toast({ title: "Error loading messages", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("adminToken");
    await signOut(auth);
    navigate("/admin");
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(new Date(dateStr));
    } catch {
      return dateStr;
    }
  };

  const sendWhatsAppConfirmation = (apt: Appointment) => {
    // Sanitize phone: strip non-digits, add India country code
    const digits = apt.contactNumber.trim().replace(/\D/g, '');
    const formattedPhone = digits.startsWith('91') ? digits : `91${digits}`;

    const isHomeSession = apt.service.toLowerCase().includes('home') || apt.service.toLowerCase().includes('doc.door');

    // Try to extract address from notes for home sessions
    const addressMatch = apt.notes?.match(/Address:\s*(.+?)(\n|$)/);
    const address = addressMatch ? addressMatch[1].trim() : '';

    const message = isHomeSession
      ? `Dear ${apt.patientName},

We are pleased to confirm your *Doc.Door Home Visit* appointment at Dr. Riddhika's Physiotherapy Clinic.

Date: ${formatDate(apt.appointmentDate)}
Time: ${apt.appointmentTime}${apt.assignedTo ? `
Physiotherapist: ${apt.assignedTo}` : ''}${address ? `
Visit Address: ${address}` : ''}

Our physiotherapist will arrive at your residence at the scheduled time. We kindly request that a responsible adult be present to receive them. Please have any relevant medical reports, prescriptions, or prior diagnostic records readily available.

Should you have any questions or require assistance, please do not hesitate to contact us at 8252482702.

Warm regards,
*Dr. Riddhika's Physiotherapy Clinic*
J-39, PC Colony, Kankarbagh, Patna, Bihar 800020`

      : `Dear ${apt.patientName},

We are pleased to confirm your physiotherapy appointment at *Dr. Riddhika's Physiotherapy Clinic*.

Date: ${formatDate(apt.appointmentDate)}
Time: ${apt.appointmentTime}
Service: ${apt.service}${apt.assignedTo ? `
Physiotherapist: ${apt.assignedTo}` : ''}

We kindly request you to arrive 5 minutes prior to your scheduled time. Please carry any relevant medical reports, prescriptions, or prior diagnostic records for reference.

Should you have any questions or require assistance, please do not hesitate to contact us at 8252482702.

Warm regards,
*Dr. Riddhika's Physiotherapy Clinic*
J-39, PC Colony, Kankarbagh, Patna, Bihar 800020`;

    window.open(`https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleUpdateAppointment = async (id: string, updates: Partial<Appointment>) => {
    try {
      const docRef = doc(db, "appointments", id);
      await updateDoc(docRef, updates);
      
      setAppointments((prev) => prev.map(apt => apt._id === id ? { ...apt, ...updates } : apt));
      toast({ title: "Appointment updated successfully!" });
    } catch (error) {
      toast({ title: "Failed to update appointment", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-12 px-4 md:px-8 container mx-auto max-w-5xl">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-bold text-clinic-dark">Dashboard</h1>
            <p className="text-gray-500">Manage your clinic inquiries</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        <div className="flex gap-4 mb-6">
          <Button 
            variant={activeTab === 'appointments' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('appointments')}
            className={activeTab === 'appointments' ? 'bg-clinic-primary hover:bg-clinic-dark text-white' : ''}
          >
            <Calendar className="w-4 h-4 mr-2" /> Appointments
          </Button>
          <Button 
            variant={activeTab === 'contacts' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('contacts')}
            className={activeTab === 'contacts' ? 'bg-clinic-primary hover:bg-clinic-dark text-white' : ''}
          >
            <MessageSquare className="w-4 h-4 mr-2" /> Contact Messages
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-clinic-primary mx-auto mb-4"></div>
            Loading data...
          </div>
        ) : activeTab === 'appointments' ? (
          /* APPOINTMENTS TAB */
          appointments.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No appointments yet</h3>
              <p className="text-gray-500">When patients book online, they will appear here.</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {appointments.map((apt) => (
                <div key={apt._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">{apt.patientName}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-clinic-accent text-clinic-primary uppercase tracking-wide">
                          {apt.service}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-gray-400" />
                          <a href={`tel:${apt.contactNumber}`} className="hover:text-clinic-secondary">{apt.contactNumber}</a>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {formatDate(apt.appointmentDate)} at {apt.appointmentTime}
                        </div>
                      </div>
                    </div>
                    {/* Management Controls */}
                    <div className="flex flex-col gap-3 min-w-[200px] bg-gray-50/80 p-4 rounded-xl border border-gray-100 mt-4 md:mt-0 shadow-sm">
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1.5 block uppercase tracking-wider">Status</label>
                        <select 
                          value={apt.status} 
                          onChange={(e) => handleUpdateAppointment(apt._id, { status: e.target.value })}
                          className="w-full text-sm border-gray-200 rounded-lg p-2.5 focus:border-clinic-secondary focus:ring-1 focus:ring-clinic-secondary bg-white shadow-sm transition-all"
                        >
                          <option value="Pending">🕒 Pending</option>
                          <option value="Confirmed">✅ Confirmed</option>
                          <option value="Completed">🏁 Completed</option>
                          <option value="Cancelled">❌ Cancelled</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1.5 block uppercase tracking-wider">Assigned Staff</label>
                        <input 
                          type="text" 
                          placeholder="Assign employee..."
                          defaultValue={apt.assignedTo || ""}
                          onBlur={(e) => {
                            if (e.target.value !== apt.assignedTo) {
                              handleUpdateAppointment(apt._id, { assignedTo: e.target.value });
                            }
                          }}
                          className="w-full text-sm border-gray-200 rounded-lg p-2.5 focus:border-clinic-secondary focus:ring-1 focus:ring-clinic-secondary bg-white shadow-sm transition-all"
                        />
                      </div>
                      {apt.status === 'Confirmed' && (
                        <button
                          onClick={() => sendWhatsAppConfirmation(apt)}
                          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all shadow-sm mt-1"
                        >
                          <Send className="w-4 h-4" />
                          Send WhatsApp Confirmation
                        </button>
                      )}
                    </div>
                  </div>
                  {apt.notes && (
                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-start gap-2 text-gray-600 text-sm">
                      <FileText className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" />
                      <p className="leading-relaxed whitespace-pre-line">{apt.notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        ) : (
          /* CONTACTS TAB */
          contacts.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-4">
                <MessageSquare className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No messages yet</h3>
              <p className="text-gray-500">Contact form submissions will appear here.</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {contacts.map((contact) => (
                <div key={contact._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">{contact.name}</h3>
                        <span className="text-sm font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                          {contact.subject}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-gray-400" />
                          <a href={`tel:${contact.phone}`} className="hover:text-clinic-secondary">{contact.phone}</a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-gray-400" />
                          <a href={`mailto:${contact.email}`} className="hover:text-clinic-secondary">{contact.email}</a>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-xs text-gray-400">
                      Sent on {formatDate(contact.createdAt)}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col gap-2 text-gray-700 text-sm bg-gray-50/50 p-4 rounded-lg">
                    <p className="whitespace-pre-line">{contact.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
