interface progressBarTypes {
  percentage: number;
}

export const ProgressBar = ({ percentage = 0 }: progressBarTypes) => {
  return (
    <div className="progressBarContainer">
      <div className='progressBar' style={{ width: `${percentage > 100 ? 100 : percentage}%` }}>
        <p>{percentage}</p>
      </div>
    </div>
  )
}

