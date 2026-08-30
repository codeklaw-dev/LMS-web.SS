import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Icon from '../ui/Icon';

/**
 * Grouped links with one-line descriptions plus a featured card (§2.2).
 * Rendered inside the header; dismissal is owned by <Header>.
 */
export default function MegaMenu({ menu, id, onNavigate }) {
  return (
    <div className="megamenu" id={id}>
      <Container>
        <div className="megamenu__grid" data-cols={menu.groups.length + (menu.featured ? 1 : 0)}>
          {menu.groups.map((group) => (
            <div key={group.title}>
              <p className="megamenu__group-title">{group.title}</p>
              <ul className="megamenu__list">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="megamenu__item" onClick={onNavigate}>
                      <span className="megamenu__item-label">{item.label}</span>
                      <span className="megamenu__item-desc">{item.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {menu.featured && (
            <Link to={menu.featured.href} className="megamenu__featured" onClick={onNavigate}>
              <span className="badge">{menu.featured.badge}</span>
              <h3>{menu.featured.title}</h3>
              <p>{menu.featured.body}</p>
              <span>
                Read more <Icon name="ArrowRight" size={16} className="icon-flip" />
              </span>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
