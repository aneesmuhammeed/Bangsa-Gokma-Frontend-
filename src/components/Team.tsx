import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      bio: 'Visionary leader with 15+ years of industry experience'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      bio: 'Tech innovator specializing in cutting-edge solutions'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      bio: 'Award-winning designer with a passion for user experience'
    }
  ];

  return (
    <section id="team" className="py-24 bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Meet the talented individuals who make our success possible. Each member brings unique expertise and passion to our mission.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-neutral-900 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-emerald-500 mb-3">{member.role}</p>
                <p className="text-neutral-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;