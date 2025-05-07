import Breadcrumb from "react-bootstrap/Breadcrumb";

function Document() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Document</h1>
      <p>문서입니다.</p>
    </>
  );
}

export default Document;
