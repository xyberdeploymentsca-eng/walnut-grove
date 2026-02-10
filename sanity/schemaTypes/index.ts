/** @format */

import { type SchemaTypeDefinition } from "sanity";
import { homepage } from "./homepage";
import { servicesPage } from "./servicesPage";
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
    laboratoryPage,
    ultrasoundPage,
    dentalPage,
    spayNeuterPage,
    petBoardingPage,
  ],
};
