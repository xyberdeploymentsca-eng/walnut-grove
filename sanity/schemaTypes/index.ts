/** @format */

import { type SchemaTypeDefinition } from "sanity";
import { homepage } from "./homepage";
import { servicesPage } from "./servicesPage";
import { aboutPage } from "./aboutPage";
import {
  dentalPage,
  laboratoryPage,
  petBoardingPage,
  spayNeuterPage,
  ultrasoundPage,
} from "./subServicePages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    servicesPage,
    aboutPage,
    laboratoryPage,
    ultrasoundPage,
    dentalPage,
    spayNeuterPage,
    petBoardingPage,
  ],
};
