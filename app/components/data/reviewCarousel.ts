import avatarOne from "@/app/assets/imgs/Avatar (1).svg";
import avatarTwo from "@/app/assets/imgs/Avatar (2).svg";
import avatarThree from "@/app/assets/imgs/Avatar (3).svg";

interface carouselItemProp {
  img: any;
  name: string;
  role: string;
  review: string;
}

const reviewCarousel: carouselItemProp[] = [
  {
    img: { avatarOne },
    name: "Jackson Leo",
    role: "Founder and CEO of Supreme",
    review:
      "Learn Pro has been a remarkable journey of personal and professional growth. From the moment I enrolled, I knew I was in the right place. The courses offered a perfect balance of theory and practical applications, giving me the knowledge and skills needed to excel in my field.",
  },
  {
    img: { avatarTwo },
    name: "Angela King",
    role: "Founder AT & T",
    review:
      "Learn Pro has been a remarkable journey of personal and professional growth. From the moment I enrolled, I knew I was in the right place. The courses offered a perfect balance of theory and practical applications, giving me the knowledge and skills needed to excel in my field.",
  },
  {
    img: { avatarThree },
    name: "Betty Anderson",
    role: "User",
    review:
      "Learn Pro has been a remarkable journey of personal and professional growth. From the moment I enrolled, I knew I was in the right place. The courses offered a perfect balance of theory and practical applications, giving me the knowledge and skills needed to excel in my field.",
  },
];
export default reviewCarousel;
