import avatar1 from "@/app/assets/imgs/Avatar.svg"
import avatar2 from "@/app/assets/imgs/Avatar (1).svg"
import avatar3 from "@/app/assets/imgs/Avatar (2).svg"
import avatar4 from "@/app/assets/imgs/Avatar (3).svg"

interface teamProp{
    img: any,
    name: string,
    profession: string,
    description: string,
}

const teamData:teamProp[] = [
    {
        img: avatar1,
        name:"Jackson Leo",
        profession:"Head Doctor",
        description:"Lorem ipsum dolor sit amet consectetur. Vitae ut sagittis tincidunt et fames dui turpis.",
    },
    {
        img: avatar2,
        name:"Perry Henry",
        profession:"Head Nurse",
        description:"Lorem ipsum dolor sit amet consectetur. Vitae ut sagittis tincidunt et fames dui turpis.",
    },
    {
        img: avatar3,
        name:"Kenny Marvin",
        profession:"Specialist",
        description:"Lorem ipsum dolor sit amet consectetur. Vitae ut sagittis tincidunt et fames dui turpis.",
    },
    {
        img: avatar4,
        name:"Marry Jake",
        profession:"AI Professional",
        description:"Lorem ipsum dolor sit amet consectetur. Vitae ut sagittis tincidunt et fames dui turpis.",
    },
]
export default teamData 