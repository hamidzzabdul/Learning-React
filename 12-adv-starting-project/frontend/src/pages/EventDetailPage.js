import { useParams } from "react-router-dom";

const EventsDetails = () => {
  const params = useParams();

  return (
    <>
      <h1>Events Details page</h1>
      <p>{params.eventId}</p>
    </>
  );
};
export default EventsDetails;
