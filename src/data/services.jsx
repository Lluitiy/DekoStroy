import designInterior from '../img/Services/design_interior.png';
import renovationNewBuilding from '../img/Services/renovationNewBuilding.png';
import constructionOfHouses from '../img/Services/constructionOfHouses.jpg';
import urgentApartmentRenovation from '../img/Services/urgentApartmentRenovation.png';
import finishingWork from '../img/Services/FinishingWork.jpg';
import electricInstallationWork from '../img/Services/electricInstallationWork.jpg';
import renovation from '../img/Services/renovation.jpg';

const servisesList = [
	{
		type: "Дизайн інтер'єрів",
		img: designInterior,
		src: 'interiorDesign',
	},
	{
		type: 'Ремонт у новобудові',
		img: renovationNewBuilding,
	},
	{
		type: 'Будівництво будинків',
		img: constructionOfHouses,
	},
	{
		type: 'Євроремонт',
		img: renovation,
	},
	{
		type: 'Терміновий ремонт квартир',
		img: urgentApartmentRenovation,
	},
	{
		type: 'Оздоблювальні послуги',
		img: finishingWork,
	},
	{
		type: 'Електромонтажні роботи',
		img: electricInstallationWork,
	},
];

export default servisesList;
