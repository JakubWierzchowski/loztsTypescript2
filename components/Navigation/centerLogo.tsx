import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Span } from '@/ui';
import { CenterLogoProps } from '@/types/navigation/navBar.types';

export const CenterLogo: React.FC<CenterLogoProps> = ({ pathname, scrollValue, color }) => {
  const shouldDisplayLogo = pathname !== '/' || scrollValue >= 598;

  return (
    <li className="centerMenu">
      <div className="flexCenter">
        <div className="has-dropdown">
          {shouldDisplayLogo && (
            <Link href="/" className="menu-link">
              <div className="logo">
                <Span color={color} className="logoName">
                  L
                </Span>
                <div className="divIMGlogo">
                  <Image
                    className="logoNameImage"
                    src="/images/header/LOZTS1.png"
                    alt="Logo1"
                    width={40}
                    height={40}
                    priority
                  />
                  <Image
                    className="logoNameImage2"
                    src="/images/header/LOZTS2.png"
                    alt="Logo2"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <Span color={color} className="logoName">
                  Z
                </Span>
                <Span color={color} className="logoName">
                  T
                </Span>
                <Span color={color} className="logoName">
                  S
                </Span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};
