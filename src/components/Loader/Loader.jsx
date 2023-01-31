import React, { useEffect, useState } from 'react'
import { RingLoader } from "react-spinners";

const Loader = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])

  return (
    <div className="w-full h-full flex justify-center items-center">
      {loading ? (
        <RingLoader size={150} color={"#36d7b7"} loading={loading} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Loader;