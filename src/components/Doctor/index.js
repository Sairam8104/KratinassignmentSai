import {Component} from 'react'
import {TbAward} from 'react-icons/tb'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

class Doctor extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="DoctorContainer">
          <h1>NearBy Doctors</h1>
          <div className="DoctorDetailsContainer">
            <img
              src="https://cdn.yashodahospitals.com/wp-content/uploads/dr-sunil-dachepalli-orthopedician-hyderabad.jpg"
              alt="Sunil"
              className="ProfileSize"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. Sunil Dachepalli</h1>
              <p className="study">
                MBBS, MS (Ortho), MRCS, CCBST, MSc (Tr & Ortho), MCH (Ortho),
                FRCS (Tr & Ortho)
              </p>
              <p className="designation">Speciality : Bones (Orthopaedics)</p>
              <p className="para">25 Years Of Experience</p>
              <p className="designation">
                Senior Consultant Orthopedic Joint Replacement & Arthroscopic
                Surgeon
              </p>
              <div className="awardContainer">
                <TbAward size="24" />
                <p className="award">5 awards</p>
              </div>
              <div>
                <button type="button" className="outlineButton">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="DoctorDetailsContainer">
            <img
              src="https://www.apollowhitedental.com/wp-content/uploads/2022/07/Dr.-Geethu-Pradeep.png"
              alt="Geethu"
              className="ProfileSize"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. Geethu Pradeep</h1>
              <p className="study">BDS, MDS</p>
              <p className="designation">Speciality : Dentist (Endodontics)</p>
              <p className="para">10 Years Of Experience</p>
              <p className="designation">Endodontics</p>
              <div className="awardContainer">
                <TbAward size="24" />
                <p className="award">1 awards</p>
              </div>
              <div>
                <button type="button" className="outlineButton">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="DoctorDetailsContainer">
            <img
              src="https://cdn.askapollo.com/live/images/doctors/opthalmology/dr-indumathy-t-ramachandran-opthalmology-in-hyderabad.png"
              alt="Indumathy"
              className="ProfileSize"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. Indumathy Ramachandran</h1>
              <p className="study">MBBS, DO, DNB (Opthal), FICO</p>
              <p className="designation">Speciality : Eyes (Opthalmology)</p>
              <p className="para">18 Years Of Experience</p>
              <p className="designation">
                Laser Refractive Surgeon, Fellowship in Cornea and External
                Disease and Refractive Surgery.
              </p>
              <div className="awardContainer">
                <TbAward size="24" />
                <p className="award">2 awards</p>
              </div>
              <div>
                <button type="button" className="outlineButton">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="DoctorDetailsContainer">
            <img
              src="https://www.apollocradle.com/wp-content/uploads/2019/01/mahita-reddy-a-1.jpg.webp"
              alt="Mahita"
              className="ProfileSize"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. Mahita Reddy A</h1>
              <p className="study">MBBS, MD(Obs & Gyn), DGO, FICOG</p>
              <p className="designation">
                Speciality : Gynecology & Obstetrics
              </p>
              <p className="para">25 Years Of Experience</p>
              <p className="designation">Obstetrics & Gynecology</p>
              <div className="awardContainer">
                <TbAward size="24" />
                <p className="award">3 awards</p>
              </div>
              <div>
                <button type="button" className="outlineButton">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="DoctorDetailsContainer">
            <img
              src="https://cdn.yashodahospitals.com/wp-content/uploads/Dr.-Nagendra-Mahendra.jpg"
              alt="Nagendra"
              className="ProfileSize"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. Nagendra Mahendra</h1>
              <p className="study">MBBS, DLO, DNB (ENT)</p>
              <p className="designation">Speciality : Endoscopic (ENT)</p>
              <p className="para">40 Years Of Experience</p>
              <p className="designation">
                Micro Ear Surgery, Phono Surgery, Laryngotracheal Surgery,
                Endoscopic Surgery, Endoscopic Skull Base
              </p>
              <div className="awardContainer">
                <TbAward size="24" />
                <p className="award">3 awards</p>
              </div>
              <div>
                <button type="button" className="outlineButton">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="DoctorDetailsContainer">
            <img
              src="https://cdn.yashodahospitals.com/wp-content/uploads/Dr-T-Sashikanth-Cardiologist-in-hyderabad.jpg"
              alt="Sashikanth"
              className="ProfileSize"
            />
            <div className="detailsContainer">
              <h1 className="name">Dr. T. Sashikanth</h1>
              <p className="study">MD, DM, Fellow ICPS (Paris)</p>
              <p className="designation">Speciality : Cardiologist (Heart)</p>
              <p className="para">24 Years Of Experience</p>
              <p className="designation">
                Interventional Cardiologist, Director-CathLab & HOD
              </p>
              <div className="awardContainer">
                <TbAward size="24" />
                <p className="award">2 awards</p>
              </div>
              <div>
                <button type="button" className="outlineButton">
                  View Profile
                </button>
                <button type="button" className="buttonBtn">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Doctor
