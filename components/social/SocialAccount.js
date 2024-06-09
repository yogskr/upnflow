import Image from 'next/image';
import Link from 'next/link';

import styles from './SocialAccount.module.css';

export default function SocialAccount() {
  const socialLinks = [
    {
      alt: 'GitHub',
      src: '/github.svg',
      link: 'https://github.com/yogskr',
    },
    {
      alt: 'LinkedIn',
      src: '/linkedin.svg',
      link: 'https://www.linkedin.com/in/yogakrisanta/',
    },
    {
      alt: 'Threads',
      src: '/threads.svg',
      link: 'https://threads.net/yogskr',
    },
  ];

  return (
    <ul className={styles.socialContainer}>
      {socialLinks.map((social, index) => {
        return (
          <li key={index} className={styles.socialList}>
            <Link href={social.link} target="_blank" rel="noopener noreferrer">
              <Image src={social.src} alt={social.alt} width={25} height={25} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
