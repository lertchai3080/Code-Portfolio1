import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    id: 'word-game',
    title: 'WORD GUESSING GAME',
    team: 'ทีม 7 คน',
    summary: [
      'พัฒนาแอปพลิเคชันร่วมไปกับทีม 7 คน',
      'ประยุกต์ใช้วิธีการเก็บข้อมูลด้วยโครงสร้างอาร์เรย์ (Array) ในการสร้างเป็นเกมทายคำศัพท์',
      'ส่งเสริมความสนุกสนาน ฝึกกระบวนการคิด และวิเคราะห์คำศัพท์',
    ],
    description:
      'เกมทายคำศัพท์ที่พัฒนาขึ้นเพื่อส่งเสริมความสนุกและการพัฒนาทักษะทางภาษาให้กับผู้เล่นโดยการใช้ตัวเลือกคำศัพท์ที่หลากหลายและโหมดการเล่นที่เข้าใจง่าย',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: [
      'พัฒนาแอปพลิเคชันร่วมกับทีม 7 คน และแบ่งหน้าที่ชัดเจนตามความถนัดของแต่ละคน',
      'ใช้โครงสร้าง Array และการทำงานแบบวนซ้ำเพื่อจัดการคำศัพท์และสถานะเกมอย่างมีประสิทธิภาพ',
      'ออกแบบระบบการเล่นที่ให้ความรู้สึกสนุกและกระตุ้นการคิดวิเคราะห์ของผู้เล่น',
      'ช่วยฝึกทักษะความจำ ความละเอียดรอบคอบ และการทำงานร่วมกันในทีม',
    ],
  },
  {
    id: 'edoc',
    title: 'E-Document System',
    team: 'ทีม 5 คน · ร่วมกับ Metthier',
    summary: [
      'ระบบจัดการเอกสารภายในร่วมกับทีม 5 คน',
      'เน้นการเข้าถึงง่าย ปลอดภัย และจัดหมวดหมู่เอกสารให้เป็นระเบียบเรียบร้อย',
      'ได้รับโจทย์และแนวทางการทำงานโดยตรงจากบุคลากรภายนอก บริษัท Metthier',
    ],
    description:
      'ระบบจัดการเอกสารภายในที่ช่วยให้การเก็บข้อมูลและเรียกใช้เอกสารเป็นไปอย่างเป็นระเบียบ ปลอดภัย และเข้าถึงได้ง่ายทั้งภายในองค์กร',
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: [
      'พัฒนาระบบจัดการเอกสารร่วมกับทีม 5 คน โดยเน้นความเรียบง่ายและใช้งานได้จริง',
      'ออกแบบระบบแยกประเภทเอกสารและการจัดเก็บข้อมูลเพื่อเพิ่มประสิทธิภาพในการค้นหา',
      'ยึดหลักความปลอดภัยและความสะดวกในการใช้งานให้ตรงตามความต้องการของผู้ใช้งาน',
      'ทำงานภายใต้โจทย์และแนวทางที่ได้รับจากบุคลากรภายนอกบริษัท Metthier',
    ],
  },
  {
    id: 'gai-thong',
    title: 'ระบบร้านไก่ทอง (Gai Thong)',
    team: 'พัฒนาเดี่ยว (1 คน)',
    summary: [
      'ออกแบบและพัฒนาด้วยตนเอง (1 คน)',
      'ระบบแคชเชียร์และระบบหลังบ้านร้านอาหาร (คำนวณรายได้ สถิติการขาย และจัดการสต๊อก)',
      'ออกแบบหน้าแคชเชียร์ให้ทันสมัย รวดเร็ว และใช้งานง่าย',
    ],
    description:
      'ระบบร้านอาหารและแคชเชียร์ที่ถูกพัฒนาขึ้นเพื่อช่วยบริหารการขาย สต๊อกสินค้า และการทำงานภายในร้านแบบมีประสิทธิภาพ',
    images: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: [
      'สร้างระบบด้วยตนเองทั้งหมด โดยเริ่มจากการวางโครงสร้างระบบจนถึงการออกแบบหน้าแคชเชียร์',
      'รวมฟังก์ชันคำนวณรายได้ สถิติการขาย และจัดการสต๊อกสินค้าให้ใช้งานได้จริง',
      'ออกแบบหน้าแคชเชียร์ที่ทันสมัย และสามารถใช้งานได้ง่าย รวดเร็ว ลดภาระในการปฏิบัติงาน',
      'เพิ่มประสิทธิภาพให้ร้านทำงานได้ลื่นไหลมากขึ้นภายใต้แนวคิดการพัฒนาระบบที่ตอบโจทย์จริง',
    ],
  },
  {
    id: 'cinebook',
    title: 'CINEBOOK',
    team: 'ทีม 3 คน',
    summary: [
      'ระบบจองตั๋วหนัง (Movie Booking Website) ร่วมกับทีม 3 คน',
      'เน้นความรวดเร็ว สะดวกสบาย และง่ายต่อการใช้งานของผู้ซื้อตั๋ว',
    ],
    description:
      'เว็บไซต์จองตั๋วหนังที่ออกแบบเพื่อให้งานจองตั๋วเป็นเรื่องง่ายและรวดเร็ว ด้วยการใช้งานที่เรียบง่ายและการจัดการข้อมูลที่มีประสิทธิภาพ',
    images: [
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: [
      'พัฒนาเว็บไซต์จองตั๋วหนังร่วมกับทีม 3 คน โดยเน้นความสะดวกและรวดเร็วต่อการใช้งาน',
      'ออกแบบกระบวนการเลือกโรงหนัง วันเวลา และการยืนยันการจองให้เป็นไปอย่างแม่นยำ',
      'มุ่งเน้นให้ผู้ใช้ได้รับประสบการณ์ที่ใช้งานง่ายและสบายตาในทุกขั้นตอน',
      'สรุปผลสำเร็จของระบบจากการทำงานร่วมกันของทีมที่มีความเข้ากันดี',
    ],
  },
]

function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedProject) return
      if (event.key === 'Escape') setSelectedProject(null)
      if (event.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % selectedProject.images.length)
      if (event.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  const openProject = (project) => {
    setSelectedProject(project)
    setSelectedIndex(0)
  }

  const closeModal = () => setSelectedProject(null)

  return (
    <div className="portfolio-app">
      <nav>
        <div className="nav-container">
          <div className="logo">SPU PORTFOLIO</div>
          <ul className="nav-links">
            <li><a href="#profile">ประวัติส่วนตัว</a></li>
            <li><a href="#education">ประวัติการศึกษา</a></li>
            <li><a href="#projects">ผลงานที่ประทับใจ</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <h1>PORTFOLIO</h1>
        <p className="subtitle">แฟ้มสะสมผลงาน | เลิศชาย เจริญชัย</p>
        <p className="tagline">มหาวิทยาลัยศรีปทุม · นักศึกษาระดับชั้นปีที่ 4</p>
      </header>

      <main className="container">
        <section id="profile">
          <div className="section-title">
            <h2>01 PROFILE</h2>
            <p>ประวัติส่วนตัว</p>
          </div>

          <div className="profile-grid">
            <div className="profile-image-container">
              <img src="/line_stdempimg.cfm.jpg" alt="เลิศชาย เจริญชัย" className="profile-card-img" />
            </div>

            <div className="profile-info">
              <h3>ข้อมูลส่วนตัว</h3>
              <div className="info-list">
                <div className="info-item"><span>ชื่อ-สกุล:</span> เลิศชาย เจริญชัย</div>
                <div className="info-item"><span>ชื่อเล่น:</span> เอก</div>
                <div className="info-item"><span>อายุ:</span> 22 ปี</div>
                <div className="info-item"><span>วันเกิด:</span> 06/11/2004</div>
                <div className="info-item"><span>สัญชาติ:</span> ไทย</div>
                <div className="info-item"><span>เพศ:</span> ชาย</div>
              </div>

              <h3>ความสามารถ &amp; จุดเด่น</h3>
              <div className="">
                <div className="skill-item">
                  <div className="skill-header">
                    <span>มนุษยสัมพันธ์ดี</span>
                    <span></span>
                  </div>
    
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span>ทำงานเป็นทีมได้ดี</span>
                    <span></span>
                  </div>
                  
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span>วางแผนและรอบคอบ</span>
                    <span></span>
                  </div>
                  
                </div>
              </div>

              <div className="contact-hobbies-grid">
                <div className="box-card">
                  <h4>ช่องทางติดต่อ</h4>
                  <ul>
                    <li>📞 099-269-8539</li>
                    <li>✉️ lech72801@gmail.com</li>
                    <li>💬 LINE: lertchai1030</li>
                    <li>💻 GitHub: github.com/lertchai3080</li>
                  </ul>
                </div>

                <div className="box-card">
                  <h4>งานอดิเรก</h4>
                  <ul>
                    <li>• อ่านหนังสือ</li>
                    <li>• ดูข่าว</li>
                    <li>• วิเคราะห์ข้อมูล</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="section-title">
            <h2>02 EDUCATION</h2>
            <p>ประวัติการศึกษา</p>
          </div>

          <div className="education-timeline">
            <div className="edu-card">
              <div className="level">อนุบาลศึกษา / ประถมศึกษา</div>
              <h3>โรงเรียนสารสาสน์สุขสวัสดิ์</h3>
            </div>
            <div className="edu-card">
              <div className="level">มัธยมศึกษา</div>
              <h3>โรงเรียนสารสาสน์สุขสวัสดิ์</h3>
            </div>
            <div className="edu-card">
              <div className="level">มหาวิทยาลัย</div>
              <h3>มหาวิทยาลัยศรีปทุม</h3>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="section-title">
            <h2>03 CERTIFICATES &amp; PROJECTS</h2>
            <p>ผลงานที่ประทับใจ</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <div className="project-body">
                  <div>
                    <ul>
                      {project.summary.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-actions">
                    <button type="button" className="detail-button" onClick={() => openProject(project)}>
                      ดูรายละเอียด
                    </button>
                  </div>
                  <span className="tag-team">{project.team}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <h2>THANK YOU</h2>
        <p>ขอขอบคุณ | เลิศชาย เจริญชัย (มหาวิทยาลัยศรีปทุม)</p>
      </footer>

      {selectedProject && (
        <div className="project-modal active" onClick={(event) => event.target === event.currentTarget && closeModal()}>
          <div className="project-modal-content" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle">
            <div className="project-modal-header">
              <h3 id="projectModalTitle">{selectedProject.title}</h3>
              <button className="close-modal" type="button" onClick={closeModal} aria-label="ปิด">×</button>
            </div>

            <div className="project-gallery-wrap">
              <div className="project-gallery">
                <button
                  className="gallery-nav gallery-prev"
                  type="button"
                  aria-label="รูปก่อนหน้า"
                  onClick={() => setSelectedIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)}
                >
                  ‹
                </button>
                <button
                  className="gallery-nav gallery-next"
                  type="button"
                  aria-label="รูปถัดไป"
                  onClick={() => setSelectedIndex((prev) => (prev + 1) % selectedProject.images.length)}
                >
                  ›
                </button>

                {selectedProject.images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${selectedProject.title} ${index + 1}`}
                    className={index === selectedIndex ? 'active' : ''}
                  />
                ))}
              </div>

              <div className="gallery-dots">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    className={index === selectedIndex ? 'gallery-dot active' : 'gallery-dot'}
                    aria-label={`ไปยังรูปที่ ${index + 1}`}
                    onClick={() => setSelectedIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="project-details">
              <h4>ภาพรวมของโปรเจกต์</h4>
              <p>{selectedProject.description}</p>
              <ul>
                {selectedProject.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
