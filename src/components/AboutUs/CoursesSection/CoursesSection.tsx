import Image from 'next/image';
import styles from './CoursesSection.module.scss';

const CoursesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.label}>Range of courses and programme</p>
            <h2 className={styles.title}>Variety of Options</h2>
            <p className={styles.description}>
              Established with a vision to revolutionise learning, LAMS is 
              committed to offering a diverse range of courses and programmes 
              meticulously curated to meet the needs of today's learners. From 
              professional development to academic advancement, our platform 
              provides a pathway for individuals to unlock their full potential 
              and thrive in their chosen fields.
            </p>
            <button className={styles.button}>
              EXPLORE COURSES
            </button>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/course-scops.jpg"
              alt="Students learning"
              width={500}
              height={400}
              priority
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
