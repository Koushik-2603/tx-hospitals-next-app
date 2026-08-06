import React from 'react';

const MiyapurAbout = () => {
    return (
        <section id="about" style={{ background: 'rgb(255, 255, 255)' }} className='px-6'>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-[48%] flex-shrink-0 flex items-center justify-center p-6">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-md aspect-video">
                        <video
                            src="/assets/Miyapur/3 miyapur ruf.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center px-8 py-2 lg:py-4 lg:pl-10 lg:pr-14">
                    <h2 className="mb-2" style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.25 }}>
                        Welcome to <span style={{ color: 'rgb(189, 56, 92)' }}>TX Hospitals, Miyapur</span>
                    </h2>
                    <p className="mb-2" style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.75 }}>
                        Good healthcare should not feel far away. At TX Hospitals, Miyapur, we bring quality medical care closer to families in and around Miyapur with experienced doctors, modern facilities and a patient-first approach.
                    </p>
                    <p className="mb-2" style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.75 }}>
                        For people searching for the best hospitals near Miyapur, TX Hospitals offers multispeciality care under one roof, including doctor consultations, emergency support, diagnostics, health checkups, surgical care and follow-up services.
                    </p>
                    <p className="mb-2" style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.75 }}>
                        Whether it is a sudden illness, regular health concern, planned surgery or preventive checkup, our team is here to guide you with clear advice, timely treatment and compassionate care. At TX Hospitals, Miyapur, we focus on making every patient feel safe, supported and well cared for.
                    </p>

                    {/* <div className="grid grid-cols-4 gap-3">
                        <div className="flex flex-col items-center py-3 px-2 rounded-lg" style={{ background: 'rgb(254, 236, 236)' }}>
                            <span style={{ fontSize: '18px', fontWeight: 700, color: 'rgb(189, 56, 92)', lineHeight: 1.2 }}>
                                15+
                            </span>
                            <span className="text-center mt-0.5" style={{ fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)', lineHeight: 1.3 }}>
                                Specialities
                            </span>
                        </div>
                        <div className="flex flex-col items-center py-3 px-2 rounded-lg" style={{ background: 'rgb(254, 236, 236)' }}>
                            <span style={{ fontSize: '18px', fontWeight: 700, color: 'rgb(189, 56, 92)', lineHeight: 1.2 }}>
                                24/7
                            </span>
                            <span className="text-center mt-0.5" style={{ fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)', lineHeight: 1.3 }}>
                                Emergency Care
                            </span>
                        </div>
                        <div className="flex flex-col items-center py-3 px-2 rounded-lg" style={{ background: 'rgb(254, 236, 236)' }}>
                            <span style={{ fontSize: '18px', fontWeight: 700, color: 'rgb(189, 56, 92)', lineHeight: 1.2 }}>
                                4.8★
                            </span>
                            <span className="text-center mt-0.5" style={{ fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)', lineHeight: 1.3 }}>
                                Google Rating
                            </span>
                        </div>
                        <div className="flex flex-col items-center py-3 px-2 rounded-lg" style={{ background: 'rgb(254, 236, 236)' }}>
                            <span style={{ fontSize: '18px', fontWeight: 700, color: 'rgb(189, 56, 92)', lineHeight: 1.2 }}>
                                1000+
                            </span>
                            <span className="text-center mt-0.5" style={{ fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)', lineHeight: 1.3 }}>
                                Patients Treated
                            </span>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default MiyapurAbout;
