'use client';

export default function GoogleMap({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full rounded-xl overflow-hidden shadow-lg ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52862.22518420498!2d150.85!3d-34.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b131a67e0a1c5f1%3A0x5017d681632c890!2sWollongong%20NSW%202500!5e0!3m2!1sen!2sau!4v1"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Digital Edge Studio - Wollongong Web Design Agency Service Area"
      />
    </div>
  );
}
