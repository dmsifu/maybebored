const ActivityCard = ({ Activity }) => {
  return (
    <div className="activity-card">
        <h1>{Activity['activity']}</h1>
    </div>
  )
}

export default ActivityCard