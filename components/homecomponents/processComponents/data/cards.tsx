import { ServiceDetailsInter } from "../../../interfacests/sercideDetailsInterface";

const Cards: ServiceDetailsInter[] = [
  {
    prestador: "nattan",
    img: require("../../../../assets/modelFace.jpg"),
    status: "aguardando comfirmação",
    typeService: "pet care",
    id: "1",
    valor: 20,
    starsCounter: 3,
  },
  {
    prestador: "naldo",
    img: require("../../../../assets/modelFace.jpg"),
    status: "aguardando comfirmação",
    typeService: "pet care",
    id: "2",
    valor: 30,
    starsCounter: 5,
  },
  {
    prestador: "fernando",
    img: require("../../../../assets/modelFace.jpg"),
    status: "aguardando comfirmação",
    typeService: "pcd care",
    id: "3",
    valor: 40,
    starsCounter: 1,
  },
  {
    prestador: "joão",
    img: require("../../../../assets/modelFace.jpg"),
    status: "aguardando comfirmação",
    typeService: "idoso care",
    id: "4",
    valor: 50,
    starsCounter: 4,
  },
];
export { Cards };
