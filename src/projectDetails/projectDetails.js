import "./projectDetails.css";
import Table from "react-bootstrap/Table";
import photo from "../images/zoomImg.png";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

export function ProjectDetails() {
  const projectsData = [
    {
      id: 1,
      category: "Home",
      type: "Modular Kitchen",
      material: "High-Quality Plywood and Laminates",
      duration: "2 - 6 Weeks (Avg)",
      title: "Modular Kitchen",
      description: `
      The modular kitchen project was designed to optimize space, improve functionality, 
      and add a touch of elegance to the home. We carefully selected durable materials 
      such as high-quality plywood and premium laminates, ensuring longevity and 
      aesthetic appeal.
      
      The design included a matte finish for a modern, sleek look. Soft-closing drawers 
      and customized cabinetry were incorporated to enhance user convenience. Lighting 
      was strategically placed to provide both functionality and ambiance, making the 
      kitchen a delightful space for cooking and gathering.
      
      The project was completed within a timeline of 6 weeks, meeting all the client’s 
      requirements and expectations. Our team worked closely with the clients, ensuring 
      every detail was tailored to their needs and preferences.
    `,
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      category: "Office",
      type: "Workplace Renovation",
      material: "Glass Partitions and Vinyl Flooring",
      duration: "4 - 8 Weeks",
      title: "Office Renovation",
      description: `
      This office renovation focused on creating an open and collaborative workspace 
      while maintaining privacy. We utilized glass partitions to enhance transparency 
      and vinyl flooring for a professional yet durable finish.
      
      Ergonomic furniture and vibrant wall designs were introduced to boost employee 
      morale and productivity. The lighting design emphasized natural light, reducing 
      energy consumption and creating a welcoming ambiance.
      
      Delivered within 8 weeks, the project transformed the office into a modern and 
      efficient workspace that met all client specifications.
    `,
      image: "/path/to/image2.jpg",
    },
  ];

  return (
    <div className="projectDetails">
      <div className="pDetails-header"></div>
      <div className="details">
        <div className="d-client-info">
          <Table>
            <tbody>
              <tr>
                <td>Category</td>
                <td>Home</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>Modular Kitchen</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>High-Quality Plywood and Laminates</td>
              </tr>
              <tr>
                <td>Project Duration</td>
                <td>2 - 6 Weeks (Avg)</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-project-info">
          <h2>Modular Kitchen</h2>
          <p>
            The modular kitchen project was designed to optimize space, improve
            functionality, and add a touch of elegance to the home. We carefully
            selected durable materials such as high-quality plywood and premium
            laminates, ensuring longevity and aesthetic appeal.
            <br />
            <br />
            The design included a matte finish for a modern, sleek look.
            Soft-closing drawers and customized cabinetry were incorporated to
            enhance user convenience. Lighting was strategically placed to
            provide both functionality and ambiance, making the kitchen a
            delightful space for cooking and gathering.
            <br />
            <br />
            The project was completed within a timeline of 6 weeks, meeting all
            the client’s requirements and expectations. Our team worked closely
            with the clients, Mr. & Mrs. Sharma, ensuring every detail was
            tailored to their needs and preferences.
          </p>
        </div>
      </div>
      <div className="zoomRoom">
        <InnerImageZoom
          src={photo}
          alt="Zoomed view of modular kitchen project"
        />
      </div>
    </div>
  );
}
