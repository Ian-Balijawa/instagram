import Skeleton from "react-loading-skeleton";
import Post from "./post";

export default function Timeline() {
  const photoslist = [
    {
      id: 1,
      imageSrc: "/images/users/raphael/1.jpg",
      username: "ianbalijawa",
      likes: 1032,
      caption: "Exercitationem odio incidunt dolores Corrupti.",
      userLikedPhoto: true,
      comments: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        "Fugit veniam eveniet architecto exercitationem odio incidunt dolores corrupti, numquam est placeat",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      ],
      dateCreated: new Date().toISOString(),
    },
    {
      id: 2,
      imageSrc: "/images/users/raphael/2.jpg",
      username: "sharif",
      likes: "",
      caption: "Exercitationem odio incidunt dolores Corrupti.",
      userLikedPhoto: true,
      comments: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        "Fugit veniam eveniet architecto exercitationem odio incidunt dolores corrupti, numquam est placeat",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      ],
      dateCreated: new Date().toISOString(),
    },
    {
      id: 3,
      imageSrc: "/images/users/raphael/3.jpg",
      username: "leonidassiss",
      likes: 4503,
      caption: "Exercitationem odio incidunt dolores Corrupti.",
      userLikedPhoto: true,
      comments: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        "Fugit veniam eveniet architecto exercitationem odio incidunt dolores corrupti, numquam est placeat",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      ],
      dateCreated: new Date().toISOString(),
    },
    {
      id: 4,
      imageSrc: "/images/users/raphael/4.jpg",
      username: "ian",
      likes: 102,
      caption: "Exercitationem odio incidunt dolores Corrupti.",
      userLikedPhoto: true,
      comments: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        "Fugit veniam eveniet architecto exercitationem odio incidunt dolores corrupti, numquam est placeat",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      ],
      dateCreated: new Date().toISOString(),
    },
    {
      id: 5,
      imageSrc: "/images/users/raphael/5.jpg",
      username: "resty",
      likes: 409,
      caption: "Exercitationem odio incidunt dolores Corrupti.",
      userLikedPhoto: true,
      comments: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        "Fugit veniam eveniet architecto exercitationem odio incidunt dolores corrupti, numquam est placeat",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      ],
      dateCreated: new Date().toISOString(),
    },
  ];
  const following = " aasdfasd";
  return (
    <div className="container col-span-2">
      {following === undefined ? (
        <Skeleton count={2} width={640} height={500} className="mb-5" />
      ) : following.length === 0 ? (
        <p className="flex justify-center font-bold">
          Follow other people to see Photos
        </p>
      ) : photoslist ? (
        photoslist.map((content, index) => (
          <Post key={index} content={content} />
        ))
      ) : null}
    </div>
  );
}
