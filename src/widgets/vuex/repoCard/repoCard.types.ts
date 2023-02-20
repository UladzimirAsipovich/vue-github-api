import type { I_ONLY_FOR_CARD_REPO_COMPONENT } from "@/shared/store/initialData.types";
import type { PropType } from "vue";

type card_status_codes = "users" | "repos" | "issue" | "comments" | "none";

export type T_typeOfCard = PropType<card_status_codes>;

export type T_repoCardData = PropType<I_ONLY_FOR_CARD_REPO_COMPONENT>;
