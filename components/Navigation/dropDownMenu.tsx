import Link from 'next/link';
// import { Span } from '@/ui';
import { Span } from './navBar.styles';
import { DropdownMenuProps } from '@/types/navigation/navBar.types';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  mainMenu,
  isOpen,
  handleOpenSubmenu,
  color,
  onItemClick,
  // item,
  // menuValue,
  // setMenuValue,
}) => {
  // console.log(item);
  return (
    <>
      <Link href={mainMenu.link} className="menu-link" aria-label={mainMenu.link} onClick={handleOpenSubmenu}>
        <Span
          color={color}
          // onClick={() => {
          //   if (!item.dropDown) {
          //     setMenuValue(true);
          //   }
          // }}
        >
          {mainMenu.li}
        </Span>
      </Link>
      {mainMenu.dropDown && (
        <ul className={`submenu ${isOpen ? 'open' : ''}`} onClick={onItemClick}>
          {mainMenu.dropDown.map((subItem, index) => (
            <li key={index}>
              <Link href={subItem.link} className="menu-link" aria-label={subItem.liLi}>
                <Span color={'dark'}>{subItem.liLi}</Span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
