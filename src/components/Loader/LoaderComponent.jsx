import React, { useEffect, useState } from "react";
import { SyncLoader } from 'react-spinners'

const LoaderComponent = (props) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])

  return (
    <div className="flex justify-center">
      {loading ? (
        <SyncLoader size={props.size} color={"#36d7b7"} loading={loading} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default LoaderComponent;