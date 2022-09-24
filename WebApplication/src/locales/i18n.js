import { createI18n } from "vue-i18n";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import it from "./it.json";
import pt from "./pt.json";
import ru from "./ru.json";
import gr from "./gr.json";
import nl from "./nl.json";
import jp from "./jp.json";
import zh from "./zh.json";
const i18n = createI18n({
  locale: "es",
  messages: {
    en,
    es,
    fr,
    it,
    pt,
    ru,
    gr,
    nl,
    jp,
    zh,
  },
});

export default i18n;
