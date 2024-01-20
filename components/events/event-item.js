
import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "@/icons/date-icon";

function EventItem(props) {
    const {title, image, date, location, id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(',','\n');
    const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={'/'+image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
            <h2 className="">{title}</h2>

            <div className={classes.date}>
                <DateIcon />
                <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
                <address>{formattedAddress}</address>
            </div>
        </div>
        <div className={classes.actions}>
            <Button link={exploreLink}>Explore event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;