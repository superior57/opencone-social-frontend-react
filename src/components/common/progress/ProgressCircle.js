import { CircularProgress } from "@material-ui/core"

const ProgressCircle = () => {
    return <div className="d-flex justify-content-center align-items-center" style={{
        minHeight: 400
    }}>
        <CircularProgress />
    </div>
}

export default ProgressCircle;