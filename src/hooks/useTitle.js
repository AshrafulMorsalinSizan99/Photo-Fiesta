import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} Photo Fiesta`;
    }, [title])
};

export default useTitle;