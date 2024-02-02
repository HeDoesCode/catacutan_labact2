function RecentItem(props) {
  return (
    <div className="col py-4 px-3 rounded d-flex flex-column justify-content-center align-items-center">
      <i className={props.link + " mb-3"}></i>
      {props.name}
    </div>
  );
}

export default RecentItem;
