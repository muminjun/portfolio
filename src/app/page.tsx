import styles from "@/styles/Home.module.css";
import { TEXT_STYLES, Colors } from "@/styles/index";

export default function Home() {
  return (
    <div className={styles.container} style={{ border: `1px solid ${Colors.YELLOW["60"]}` }}>
      <h1
        style={{
          fontSize: TEXT_STYLES.headingMedium.fontSize,
          fontWeight: TEXT_STYLES.headingMedium.fontWeight,
          letterSpacing: TEXT_STYLES.headingMedium.letterSpacing,
          lineHeight: TEXT_STYLES.headingMedium.lineHeight,
        }}
      >
        김민준 프론트엔드 개발자 포트폴리오입니다.
      </h1>
      <p
        style={{
          fontSize: TEXT_STYLES.bodyMedium.fontSize,
          fontWeight: TEXT_STYLES.bodyMedium.fontWeight,
          letterSpacing: TEXT_STYLES.bodyMedium.letterSpacing,
          lineHeight: TEXT_STYLES.bodyMedium.lineHeight,
          color: Colors.GRAY["70"],
        }}
      >
        React, Next.js, Flutter를 활용한 웹·모바일 프로젝트를 소개합니다.
      </p>
    </div>
  );
}
