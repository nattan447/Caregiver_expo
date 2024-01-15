import { ServiceDetailsInter } from "../../../interfacests/sercideDetailsInterface";

const Cards: ServiceDetailsInter[] = [
  {
    prestador: "nattan",
    img: require("../../../../assets/modelFace.jpg"),
    status: "aguardando comfirmação",
    typeService: "pet care",
    id: "1",
    valor: 20,
  },
  {
    prestador: "naldo",
    img: require("../../../../assets/modelFace.jpg"),
    status: "aguardando comfirmação",
    typeService: "pet care",
    id: "2",
    valor: 30,
  },
  {
    prestador: "fernando",
    img: require("../../../../assets/modelFace.jpg"),
    status: "aguardando comfirmação",
    typeService: "pcd care",
    id: "3",
    valor: 40,
  },
  {
    prestador: "joão",
    img: require("../../../../assets/modelFace.jpg"),
    status: "aguardando comfirmação",
    typeService: "idoso care",
    id: "4",
    valor: 50,
  },
];
export { Cards };
