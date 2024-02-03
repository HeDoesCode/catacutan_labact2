function RecentItem(props) {
  return (
    <div className="col py-4 px-3 rounded d-flex flex-column justify-content-center align-items-center recent-item">
      <div className="p-2 mb-3 rounded-circle d-flex">
        <i className={props.link}></i>
      </div>
      {props.name}
    </div>
  );
}

export default RecentItem;
