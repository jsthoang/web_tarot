import React from "react";

function PageTitle(props) {
    const [content, setContent] = useState("Chọn lá bài của bạn");
    useEffect(() => {}, [third]);

    return <span>{content}</span>;
}

export default PageTitle;
