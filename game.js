"use strict";

const translations = {
  en: {
    languageLabel: "Language", canvasLabel: "A small fish swimming through a freshwater habitat", gameType: "A Fish Survival Game",
    hunger: "HUNGER", stamina: "STAMINA", growth: "GROWTH", depthBed: "DEPTH / BED", growthNext: "GROWTH · NEXT UPGRADE",
    growthAria: "Growth toward next fish upgrade", growthAriaValue: "{value} of 3 growth points", yourUpgrades: "YOUR UPGRADES",
    swim: "swim", burst: "burst", sonarPassive: "sonar auto", titleKicker: "A QUIET WATER, A HUNGRY WORLD",
    titleTagline: "Find a meal. Slip the line.",
    introCopy: "Every bite is a gamble: it may feed you or hook you. A calm pond lies at the center, with warmer and colder habitats stretching toward either end. Flowing wave lines show the current.",
    moveWater: "Move through the water", burstCost: "Burst forward; it costs stamina and hunger",
    sonarExplain: "Your sonar pings automatically. Swim into any signal to bite; each bite has an equal chance of food or bait.",
    biteRiskTitle: "BITE RISK", biteRiskAdvice: "Swim into any signal to bite automatically. Every bite has an equal chance to feed you or hook you.",
    pauseExplain: "Press E anytime to pause, resume, or return to the main menu.",
    pauseAction: "pause", paused: "PAUSED", takeABreath: "Take a breath.",
    pauseCopy: "Resume your journey, or return to the main menu and abandon this run.",
    resumeJourney: "Resume journey", returnMainMenu: "Return to main menu",
    difficultyLabel: "DIFFICULTY", difficultyVeryEasy: "Very Easy", difficultyEasy: "Easy",
    difficultyNormal: "Normal", difficultyHard: "Hard", difficultyVeryHard: "Very Hard",
    difficultyVeryEasyDescription: "Slower hunger drain and easier escapes.",
    difficultyEasyDescription: "Gentler hunger and easier escapes.",
    difficultyNormalDescription: "The balanced Stillwater experience.",
    difficultyHardDescription: "Faster hunger drain and tougher escapes.",
    difficultyVeryHardDescription: "Fast hunger drain and the toughest escapes.",
    startJourney: "Begin your journey", allUpgrades: "All upgrades",
    footerNote: "Every run leaves something behind.", fishAdaptations: "FISH ADAPTATIONS", upgrades: "Upgrades",
    upgradeIntro: "See the upgrades you can earn while swimming and the traits you can inherit between runs.",
    runUpgradeHeading: "DURING A RUN · CHOOSE ONE AT EACH GROWTH MILESTONE",
    geneTreeHeading: "BETWEEN RUNS · PERMANENT GENE TREE", availablePoints: "AVAILABLE POINTS",
    genePool: "Gene pool", earnedFarther: "Earned by surviving farther", backJourney: "Back to journey",
    stillness: "A MOMENT OF STILLNESS", youAreGrowing: "You are growing.",
    chooseAdaptation: "Choose an adaptation before the current carries you on.", lineTaut: "THE LINE GOES TAUT",
    hooked: "Hooked.", lineDirection: "Direction of the line's pull", lineForce: "LINE FORCE", breakFree: "BREAK FREE",
    escapeHint: "Follow the arrows with your direction keys.", lineStrain: "LINE STRAIN", escapeProgress: "ESCAPE PROGRESS",
    waterKeepsStory: "THE WATER KEEPS YOUR STORY",
    returnShallows: "Return to the shallows", fishLevel: "FISH LV {level}",
    pond: "Pond", warmMarsh: "Warm Marsh", hotSprings: "Hot Springs", coldRun: "Cold Run", icewater: "Icewater",
    habitatTemperature: "{habitat} · {temperature}", habitatLabel: "HABITAT",
    temperate: "TEMPERATE", warm: "WARM", tropical: "TROPICAL", cold: "COLD", freezing: "FREEZING",
    safeShallows: "INTRODUCTORY SHALLOWS · {seconds}s",
    safeTutorial: "Your sonar pings automatically. Swim into any signal to bite; every bite has an equal chance of food or bait.",
    warmCurrent: "Watch the drifting flow waves; warmer-water currents push back toward the pond.",
    coldCurrent: "Watch the drifting flow waves; cold-water currents push back toward the pond.",
    pondCalm: "The pond is calm. Swim into any signal to bite; food and bait are equally likely.",
    blocked: "Watch out! Something blocks the water.",
    goodBite: "A good bite. Keep moving.", acquired: "{name} acquired", slippedFree: "You slipped free. That cost you.",
    riverbedHolds: "The riverbed holds you.", surfaceHolds: "The surface holds you.",
    freezingLevel: "FREEZING", burningLevel: "BURNING",
    deathFreezeTitle: "The cold took hold.", deathFreezeCopy: "The icy water slowed you until you could not swim on.",
    deathBurnTitle: "The heat was too much.", deathBurnCopy: "The scalding water overwhelmed you. Cooler currents wait toward the pond.",
    upgradeResist: "Thermal Resistance", detailResist: "Freezing and burning build up 25% slower.",
    resistBonus: "{value}% slower freezing/burning",
    deathHookTitle: "The line carried you away.", deathHungerTitle: "The water grows quiet.",
    deathHookCopy: "A fisher has taken you from the water. The current keeps moving.",
    deathHungerCopy: "Without a meal, your strength faded. There is always another current.",
    maxDepth: "MAX DEPTH", genePoints: "GENE POINTS",
    geneLevel: "GENE {level}", noUpgrades: "No upgrades yet. Eat to grow.",
    upgradeScent: "Scent Trail", detailScent: "Press F to find the nearest food or bait. Each level shortens the cooldown.",
    upgradeFin: "Strong Fins", detailFin: "Swim +12%; stamina recovery +6/s.",
    upgradeGut: "Slow Metabolism", detailGut: "Hunger drains 16% slower.",
    upgradeGrowth: "Fast Growth", detailGrowth: "Each meal gives +1 extra growth bar.",
    geneSense: "Keen nose", geneFin: "Streamlined fins", geneGrowth: "Quick growth",
    senseBonus: "Press F to scent · {value}s cooldown", speedBonus: "+{value}% starting speed",
    mealGrowthBonus: "+{value}% meal growth", speedStaminaBonus: "+{speed}% speed · +{stamina}/s stamina",
    extraGrowthBar: "+{value} growth bar per meal",
    lessHunger: "{value}% less hunger", amountSense: "Scent level {value} · {seconds}s cooldown",
    scentAction: "scent", scentFound: "Scent trail: a signal is nearby.", scentCooldown: "Scent recharging: {seconds}s",
    genePrice: "{value} gene points", maxedState: "MAXED"
  },
  zh: {
    languageLabel: "语言", canvasLabel: "一条小鱼正在淡水栖息地中游动", gameType: "鱼类生存游戏",
    hunger: "饥饿", stamina: "体力", growth: "成长", depthBed: "水深 / 河床", growthNext: "成长 · 下次升级",
    growthAria: "距离鱼类下次升级的成长进度", growthAriaValue: "已获得 3 点成长中的 {value} 点", yourUpgrades: "已获得的升级",
    swim: "游动", burst: "冲刺", sonarPassive: "自动声呐", titleKicker: "宁静水域，饥饿世界",
    titleTagline: "寻找食物，躲开鱼线。",
    introCopy: "每次进食都是一次冒险：可能获得食物，也可能上钩。平静的池塘位于中央，向两端延伸的是越来越暖或越来越冷的栖息地。流动的波纹显示水流方向。",
    moveWater: "在水中游动", burstCost: "向前冲刺；会消耗体力和饥饿值",
    sonarExplain: "声呐会自动发出脉冲。游入任一信号即可进食；每一口得到食物或鱼饵的机会相同。",
    biteRiskTitle: "进食风险", biteRiskAdvice: "游入任一信号即可自动进食。每一口获得食物或被鱼钩钩住的机会相同。",
    pauseExplain: "随时按 E 键暂停、继续游戏或返回主菜单。",
    pauseAction: "暂停", paused: "已暂停", takeABreath: "歇一会儿。",
    pauseCopy: "可以继续旅程，也可以返回主菜单并放弃本次旅程。",
    resumeJourney: "继续旅程", returnMainMenu: "返回主菜单",
    difficultyLabel: "难度", difficultyVeryEasy: "非常简单", difficultyEasy: "简单",
    difficultyNormal: "普通", difficultyHard: "困难", difficultyVeryHard: "非常困难",
    difficultyVeryEasyDescription: "饥饿值消耗较慢，也更容易挣脱鱼钩。",
    difficultyEasyDescription: "饥饿值消耗较慢，挣脱鱼钩更容易。",
    difficultyNormalDescription: "平衡的静水游戏体验。",
    difficultyHardDescription: "饥饿值消耗更快，挣脱更困难。",
    difficultyVeryHardDescription: "饥饿值消耗很快，挣脱最困难。",
    startJourney: "开始旅程", allUpgrades: "查看全部升级",
    footerNote: "每次旅程都会留下印记。", fishAdaptations: "鱼类适应", upgrades: "升级",
    upgradeIntro: "查看游动时可获得的升级，以及每次旅程之间可以遗传的特性。",
    runUpgradeHeading: "旅途中 · 每次成长里程碑选择一项",
    geneTreeHeading: "旅程之间 · 永久基因树", availablePoints: "可用点数",
    genePool: "基因库", earnedFarther: "存活越远，获得越多", backJourney: "返回旅程",
    stillness: "片刻静息", youAreGrowing: "你正在成长。",
    chooseAdaptation: "选择一种适应能力，然后随水流继续前行。", lineTaut: "鱼线绷紧了",
    hooked: "上钩了。", lineDirection: "鱼线拉扯方向", lineForce: "鱼线拉力", breakFree: "挣脱鱼钩",
    escapeHint: "按方向键跟随箭头输入。", lineStrain: "鱼线张力", escapeProgress: "挣脱进度",
    waterKeepsStory: "水流记住你的故事",
    returnShallows: "返回浅水区", fishLevel: "鱼类等级 {level}",
    pond: "池塘", warmMarsh: "暖湿地", hotSprings: "温泉水域", coldRun: "寒冷河道", icewater: "冰水区",
    habitatTemperature: "{habitat} · {temperature}", habitatLabel: "栖息地",
    temperate: "温带", warm: "温暖", tropical: "热带", cold: "寒冷", freezing: "极寒",
    safeShallows: "入门浅水区 · {seconds} 秒",
    safeTutorial: "声呐会自动发出脉冲。游入任一信号即可进食；每一口得到食物或鱼饵的机会相同。",
    warmCurrent: "留意漂移的水流波纹；暖水水流会把你推回池塘方向。",
    coldCurrent: "留意漂移的水流波纹；冷水水流会把你推回池塘方向。",
    pondCalm: "池塘水流平缓。游入任一信号即可进食；食物和鱼饵的机会相同。",
    blocked: "小心！前方有障碍物。",
    goodBite: "吃得不错，继续游动。", acquired: "已获得：{name}", slippedFree: "你挣脱了，但也消耗了体力。",
    riverbedHolds: "你已到达河床。", surfaceHolds: "你已到达水面。",
    freezingLevel: "冻伤", burningLevel: "灼伤",
    deathFreezeTitle: "寒意吞没了你。", deathFreezeCopy: "冰冷的水让你越来越迟缓，再也游不动了。",
    deathBurnTitle: "高温难以承受。", deathBurnCopy: "滚烫的水压垮了你。靠近池塘的水流会凉爽一些。",
    upgradeResist: "耐寒耐热", detailResist: "冻伤和灼伤积累速度减慢 25%。",
    resistBonus: "冻伤/灼伤积累减慢 {value}%",
    deathHookTitle: "鱼线把你带走了。", deathHungerTitle: "水域渐渐归于寂静。",
    deathHookCopy: "渔夫把你从水中钓走了，水流仍在继续。",
    deathHungerCopy: "没有食物，你逐渐失去力量。前方总会有另一股水流。",
    maxDepth: "最深水深", genePoints: "基因点数",
    geneLevel: "基因 {level}", noUpgrades: "还没有升级。进食以成长。",
    upgradeScent: "气味追踪", detailScent: "按 F 寻找最近的食物或鱼饵。每级缩短冷却时间。",
    upgradeFin: "强健鱼鳍", detailFin: "游泳速度 +12%；体力恢复 +6/秒。",
    upgradeGut: "缓慢代谢", detailGut: "饥饿值消耗减慢 16%。",
    upgradeGrowth: "快速成长", detailGrowth: "每餐额外增加 1 格成长条。",
    geneSense: "灵敏嗅觉", geneFin: "流线型鱼鳍", geneGrowth: "快速成长",
    senseBonus: "按 F 嗅探 · 冷却 {value} 秒", speedBonus: "初始速度 +{value}%",
    mealGrowthBonus: "进食成长 +{value}%", speedStaminaBonus: "速度 +{speed}% · 体力恢复 +{stamina}/秒",
    extraGrowthBar: "每餐额外成长 +{value} 格",
    lessHunger: "饥饿消耗减少 {value}%", amountSense: "嗅探等级 {value} · 冷却 {seconds} 秒",
    scentAction: "嗅探", scentFound: "气味追踪：附近有信号。", scentCooldown: "嗅探冷却中：{seconds} 秒",
    genePrice: "{value} 基因点", maxedState: "已满级"
  },
  es: {
    languageLabel: "Idioma", canvasLabel: "Un pez pequeño nada por un hábitat de agua dulce", gameType: "Un juego de supervivencia de peces",
    hunger: "HAMBRE", stamina: "ENERGÍA", growth: "CRECIMIENTO", depthBed: "PROFUNDIDAD / FONDO", growthNext: "CRECIMIENTO · PRÓXIMA MEJORA",
    growthAria: "Progreso hasta la próxima mejora del pez", growthAriaValue: "{value} de 3 puntos de crecimiento", yourUpgrades: "TUS MEJORAS",
    swim: "nadar", burst: "impulso", sonarPassive: "sonar automático", titleKicker: "AGUAS TRANQUILAS, UN MUNDO HAMBRIENTO",
    titleTagline: "Encuentra comida. Escapa del anzuelo.",
    introCopy: "Cada bocado es una apuesta: puede alimentarte o engancharte. Un estanque tranquilo ocupa el centro, con hábitats cada vez más cálidos o fríos hacia los extremos. Las ondas muestran la corriente.",
    moveWater: "Muévete por el agua", burstCost: "Impúlsate; consume energía y hambre",
    sonarExplain: "El sonar emite pulsos automáticamente. Nada hacia cualquier señal para morder; cada bocado tiene la misma probabilidad de ser comida o cebo.",
    biteRiskTitle: "RIESGO AL MORDER", biteRiskAdvice: "Nada hacia cualquier señal para morder automáticamente. Cada bocado tiene la misma probabilidad de alimentarte o engancharte.",
    pauseExplain: "Pulsa E en cualquier momento para pausar, continuar o volver al menú principal.",
    pauseAction: "pausar", paused: "EN PAUSA", takeABreath: "Tómate un respiro.",
    pauseCopy: "Puedes continuar el viaje o volver al menú principal y abandonar esta partida.",
    resumeJourney: "Continuar el viaje", returnMainMenu: "Volver al menú principal",
    difficultyLabel: "DIFICULTAD", difficultyVeryEasy: "Muy fácil", difficultyEasy: "Fácil",
    difficultyNormal: "Normal", difficultyHard: "Difícil", difficultyVeryHard: "Muy difícil",
    difficultyVeryEasyDescription: "Menos hambre y escapes más fáciles.",
    difficultyEasyDescription: "Menos hambre y escapes más fáciles.",
    difficultyNormalDescription: "La experiencia equilibrada de Stillwater.",
    difficultyHardDescription: "Más hambre y escapes más difíciles.",
    difficultyVeryHardDescription: "Mucha hambre y los escapes más difíciles.",
    startJourney: "Comenzar el viaje", allUpgrades: "Todas las mejoras",
    footerNote: "Cada viaje deja huella.", fishAdaptations: "ADAPTACIONES DEL PEZ", upgrades: "Mejoras",
    upgradeIntro: "Consulta las mejoras que puedes ganar al nadar y los rasgos heredables entre partidas.",
    runUpgradeHeading: "DURANTE LA PARTIDA · ELIGE UNA EN CADA HITO DE CRECIMIENTO",
    geneTreeHeading: "ENTRE PARTIDAS · ÁRBOL GENÉTICO PERMANENTE", availablePoints: "PUNTOS DISPONIBLES",
    genePool: "Reserva genética", earnedFarther: "Se obtienen al sobrevivir más", backJourney: "Volver al viaje",
    stillness: "UN MOMENTO DE CALMA", youAreGrowing: "Estás creciendo.",
    chooseAdaptation: "Elige una adaptación antes de que la corriente te lleve.", lineTaut: "EL SEDAL SE TENSA",
    hooked: "¡Has picado!", lineDirection: "Dirección del tirón del sedal", lineForce: "TENSIÓN DEL SEDAL", breakFree: "LIBERARSE",
    escapeHint: "Sigue las flechas con las teclas de dirección.", lineStrain: "TENSIÓN", escapeProgress: "PROGRESO DE ESCAPE",
    waterKeepsStory: "EL AGUA CONSERVA TU HISTORIA",
    returnShallows: "Volver a las aguas poco profundas", fishLevel: "PEZ NIV. {level}",
    pond: "Estanque", warmMarsh: "Marisma cálida", hotSprings: "Aguas termales", coldRun: "Río frío", icewater: "Aguas heladas",
    habitatTemperature: "{habitat} · {temperature}", habitatLabel: "HÁBITAT",
    temperate: "TEMPLADO", warm: "CÁLIDO", tropical: "TROPICAL", cold: "FRÍO", freezing: "GÉLIDO",
    safeShallows: "AGUAS INICIALES · {seconds}s",
    safeTutorial: "El sonar emite pulsos automáticamente. Nada hacia cualquier señal para morder; cada bocado tiene la misma probabilidad de ser comida o cebo.",
    warmCurrent: "Observa las ondas: las corrientes cálidas te empujan hacia el estanque.",
    coldCurrent: "Observa las ondas: las corrientes frías te empujan hacia el estanque.",
    pondCalm: "El estanque está en calma. Nada hacia cualquier señal para morder; comida y cebo tienen la misma probabilidad.",
    blocked: "¡Cuidado! Hay un obstáculo en el agua.",
    goodBite: "Buen bocado. Sigue nadando.", acquired: "Mejora obtenida: {name}", slippedFree: "Te has soltado, pero te ha costado energía.",
    riverbedHolds: "El fondo del río te detiene.", surfaceHolds: "La superficie te detiene.",
    freezingLevel: "CONGELACIÓN", burningLevel: "QUEMADURA",
    deathFreezeTitle: "El frío te venció.", deathFreezeCopy: "El agua helada te fue frenando hasta que no pudiste seguir nadando.",
    deathBurnTitle: "El calor fue demasiado.", deathBurnCopy: "El agua abrasadora te superó. Hay corrientes más frescas hacia el estanque.",
    upgradeResist: "Resistencia térmica", detailResist: "La congelación y la quemadura aumentan un 25% más despacio.",
    resistBonus: "{value}% más lento el frío/calor",
    deathHookTitle: "El sedal te ha arrastrado.", deathHungerTitle: "El agua queda en silencio.",
    deathHookCopy: "Un pescador te ha sacado del agua. La corriente sigue avanzando.",
    deathHungerCopy: "Sin comida, perdiste las fuerzas. Siempre habrá otra corriente.",
    maxDepth: "PROFUNDIDAD MÁXIMA", genePoints: "PUNTOS GENÉTICOS",
    geneLevel: "GEN {level}", noUpgrades: "Aún no hay mejoras. Come para crecer.",
    upgradeScent: "Rastro de olor", detailScent: "Pulsa F para encontrar la comida o el cebo más cercano. Cada nivel acorta la recarga.",
    upgradeFin: "Aletas fuertes", detailFin: "Velocidad de nado +12%; recuperación de energía +6/s.",
    upgradeGut: "Metabolismo lento", detailGut: "El hambre disminuye un 16% más despacio.",
    upgradeGrowth: "Crecimiento rápido", detailGrowth: "Cada comida da +1 barra extra de crecimiento.",
    geneSense: "Olfato fino", geneFin: "Aletas aerodinámicas", geneGrowth: "Crecimiento rápido",
    senseBonus: "Pulsa F para olfatear · recarga {value}s", speedBonus: "+{value}% de velocidad inicial",
    mealGrowthBonus: "+{value}% de crecimiento por comida", speedStaminaBonus: "+{speed}% velocidad · +{stamina}/s energía",
    extraGrowthBar: "+{value} barra de crecimiento por comida",
    lessHunger: "{value}% menos hambre", amountSense: "Nivel de olfato {value} · recarga {seconds}s",
    scentAction: "olfatear", scentFound: "Rastro de olor: hay una señal cerca.", scentCooldown: "Olfato recargando: {seconds}s",
    genePrice: "{value} puntos genéticos", maxedState: "AL MÁXIMO"
  }
};
const supportedLanguages = ["en", "zh", "es"];
const difficultyOptions = {
  veryEasy: { descriptionKey: "difficultyVeryEasyDescription", hungerDrain: 0.7, hookSequenceOffset: -2, passiveHookStrain: 6, mistakeHookStrain: 12 },
  easy: { descriptionKey: "difficultyEasyDescription", hungerDrain: 0.85, hookSequenceOffset: -1, passiveHookStrain: 7.5, mistakeHookStrain: 15 },
  normal: { descriptionKey: "difficultyNormalDescription", hungerDrain: 1, hookSequenceOffset: 0, passiveHookStrain: 9, mistakeHookStrain: 18 },
  hard: { descriptionKey: "difficultyHardDescription", hungerDrain: 1.15, hookSequenceOffset: 1, passiveHookStrain: 11, mistakeHookStrain: 21 },
  veryHard: { descriptionKey: "difficultyVeryHardDescription", hungerDrain: 1.3, hookSequenceOffset: 2, passiveHookStrain: 13, mistakeHookStrain: 24 }
};
const storedDifficulty = localStorage.getItem("stillwater-difficulty");
let selectedDifficulty = Object.hasOwn(difficultyOptions, storedDifficulty) ? storedDifficulty : "normal";
let language = supportedLanguages.includes(localStorage.getItem("stillwater-language"))
  ? localStorage.getItem("stillwater-language")
  : "en";

function t(key, values = {}) {
  const text = translations[language][key] || translations.en[key] || key;
  return text.replace(/\{(\w+)\}/g, (match, name) => values[name] === undefined ? match : String(values[name]));
}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const $ = (id) => document.getElementById(id);

function applyTranslations() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.title = `Stillwater — ${t("gameType")}`;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  $("languageSelect").value = language;
  $("difficultySelect").value = selectedDifficulty;
  updateDifficultyDescription();
  refreshGenes();
  if (statusTimer > 0 && statusMessageKey) renderStatus();
  if (habitatToastTimer > 0 && run) $("habitatToast").textContent = t(habitatData[run.habitat].nameKey).toUpperCase();
  if (run) {
    updateOwnedUpgrades();
    updateHud();
    if (state === "upgrade") showUpgradeChoices(true);
    if (state === "hooked") $("hookTitle").textContent = t("hooked");
    if (state === "dead") renderDeathScreen();
  }
}

function changeLanguage(value) {
  language = supportedLanguages.includes(value) ? value : "en";
  localStorage.setItem("stillwater-language", language);
  applyTranslations();
}

function changeDifficulty(value) {
  selectedDifficulty = Object.hasOwn(difficultyOptions, value) ? value : "normal";
  localStorage.setItem("stillwater-difficulty", selectedDifficulty);
  $("difficultySelect").value = selectedDifficulty;
  updateDifficultyDescription();
}

function updateDifficultyDescription() {
  $("difficultyDescription").textContent = t(difficultyOptions[selectedDifficulty].descriptionKey);
}

const screens = ["titleScreen", "geneScreen", "upgradeScreen", "pauseScreen", "deathScreen"];
const SURFACE_OFFSET = 360;
const BOTTOM_DEPTH = 3200;
const BOTTOM_Y = SURFACE_OFFSET + BOTTOM_DEPTH;
const DEEP_FOOD_SCARCITY_DEPTH = 400;
const DEEP_FOOD_SPAWN_CHANCE = 0.25;
const BAIT_HUNGER_RESTORE = 10;
const MAX_ACTIVE_TARGETS = 6;
const MAX_NEARBY_TARGETS = 3;
const DEEP_EXTRA_ACTIVE_TARGETS = 4;
const DEEP_EXTRA_NEARBY_TARGETS = 2;
const habitatData = [
  { nameKey: "hotSprings", temperatureKey: "tropical", color: ["#80462f", "#3f2935"], current: [1.12, 0.12], hookLength: 7 },
  { nameKey: "warmMarsh", temperatureKey: "warm", color: ["#745044", "#243843"], current: [0.72, -0.16], hookLength: 6 },
  { nameKey: "pond", temperatureKey: "temperate", color: ["#0b3a50", "#0a283c"], current: [0, 0], hookLength: 5 },
  { nameKey: "coldRun", temperatureKey: "cold", color: ["#28536a", "#102d49"], current: [-0.78, 0.18], hookLength: 6 },
  { nameKey: "icewater", temperatureKey: "freezing", color: ["#477487", "#142f4d"], current: [-1.18, -0.12], hookLength: 7 }
];
const landscapeFeatures = [
  { style: "vents", color: "#d68a58", features: [{ x: 340, depth: 920, size: 1.1 }, { x: 1320, depth: 2260, size: 1.35 }, { x: 900, depth: 1510, size: 0.8 }, { x: 1640, depth: 2910, size: 1.1 }] },
  { style: "marsh", color: "#9caa68", features: [{ x: 420, depth: 1180, size: 1.2 }, { x: 1420, depth: 2440, size: 1 }, { x: 900, depth: 1770, size: 1.2 }, { x: 1600, depth: 3020, size: 0.85 }] },
  { style: "pond", color: "#70b995", features: [{ x: 380, depth: 1640, size: 1.25 }, { x: 1280, depth: 2680, size: 1.1 }, { x: 880, depth: 920, size: 0.9 }, { x: 1600, depth: 2220, size: 1.2 }] },
  { style: "canyon", color: "#8faeb0", features: [{ x: 460, depth: 1420, size: 1.2 }, { x: 1380, depth: 2520, size: 1.1 }, { x: 940, depth: 720, size: 0.95 }, { x: 1660, depth: 1910, size: 1.25 }] },
  { style: "ice", color: "#a9dbe0", features: [{ x: 360, depth: 980, size: 1.15 }, { x: 1300, depth: 2020, size: 1.4 }, { x: 790, depth: 2880, size: 1 }, { x: 1620, depth: 1240, size: 0.9 }, { x: 300, depth: 2580, size: 1.15 }] }
];
const surfaceLandscapes = [
  { type: "geothermal-shore", x: 1120, size: 1.1 },
  { type: "marsh-shore", x: 780, size: 0.95 },
  { type: "wooded-shore", x: 960, size: 1.05 },
  { type: "iceberg", x: 900, size: 1.4, wildlife: "penguin" },
  { type: "iceberg", x: 980, size: 1.2 }
];
const waterObstacles = [
  [{ x: 760, depth: 680, radius: 42, type: "vent" }, { x: 1490, depth: 1880, radius: 54, type: "vent" }],
  [{ x: 730, depth: 870, radius: 58, type: "roots" }, { x: 1520, depth: 2010, radius: 48, type: "roots" }],
  [{ x: 700, depth: 1080, radius: 46, type: "weed", solid: false }, { x: 1510, depth: 2090, radius: 52, type: "weed", solid: false }],
  [{ x: 700, depth: 960, radius: 54, type: "snag" }, { x: 1510, depth: 2140, radius: 48, type: "snag" }],
  [{ x: 680, depth: 760, radius: 50, type: "ice" }, { x: 1480, depth: 2180, radius: 62, type: "ice" }]
];
const LEVEL_WIDTH = 1800;
const DAY_LENGTH = 240;
const WORLD_MIN_X = -LEVEL_WIDTH * habitatData.length / 2;
const WORLD_MAX_X = LEVEL_WIDTH * habitatData.length / 2;
const swimKeys = [
  { code: "KeyW", symbol: "↑" },
  { code: "KeyA", symbol: "←" },
  { code: "KeyS", symbol: "↓" },
  { code: "KeyD", symbol: "→" }
];
const upgrades = [
  { id: "scent", nameKey: "upgradeScent", detailKey: "detailScent", apply: (run) => { run.scent = Math.min(4, run.scent + 1); } },
  { id: "resist", nameKey: "upgradeResist", detailKey: "detailResist", apply: (run) => { run.resist = Math.min(0.75, run.resist + 0.25); } },
  { id: "fin", nameKey: "upgradeFin", detailKey: "detailFin", apply: (run) => { run.speed += 0.12; run.staminaRegen += 6; } },
  { id: "gut", nameKey: "upgradeGut", detailKey: "detailGut", apply: (run) => { run.metabolism = Math.max(0.5, run.metabolism * 0.84); } },
  { id: "growth", nameKey: "upgradeGrowth", detailKey: "detailGrowth", apply: (run) => {   run.growthBonus += 1; } }
];
  const scentCooldownSeconds = (level) => Math.max(4, 15 - level * 3);
const defaults = { genes: 0, sense: 0, fins: 0, growth: 0 };
let genes = loadGenes();
let width = 0;
let height = 0;
let pixelRatio = 1;
let state = "menu";
let run = null;
let lastFrame = performance.now();
let gameTime = 0;
let spawnTimer = 0;
let sonarTimer = 0;
let sonarCooldown = 0;
let scentTarget = null;
let scentTimer = 0;
let habitatToastTimer = 0;
let statusTimer = 0;
let statusMessageKey = null;
let statusMessageValues = {};
let splashTimer = 0;
const keys = new Set();
const targets = [];
const splashParticles = [];

function loadGenes() {
  const saved = JSON.parse(localStorage.getItem("stillwater-genes") || "null");
  return { ...defaults, ...(saved || {}) };
}

function saveGenes() {
  localStorage.setItem("stillwater-genes", JSON.stringify(genes));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function activeHabitat() {
  return clamp(Math.floor((run.x - WORLD_MIN_X) / LEVEL_WIDTH), 0, habitatData.length - 1);
}

function deepWaterFactor() {
  return clamp((run.depth - DEEP_FOOD_SCARCITY_DEPTH) / (BOTTOM_DEPTH - DEEP_FOOD_SCARCITY_DEPTH), 0, 1);
}

function fishDirectionFromVelocity(vx, vy, currentDirection) {
  if (Math.hypot(vx, vy) <= 8) return currentDirection;
  return (Math.round(Math.atan2(vy, vx) / (Math.PI / 4)) + 8) % 8;
}

function pushFishOutOfSolid(centerX, centerY, radius) {
  const minDistance = radius + 13;
  let dx = run.x - centerX;
  let dy = run.y - centerY;
  let distance = Math.hypot(dx, dy);
  if (distance >= minDistance) return;
  if (distance < 0.001) {
    dx = 1;
    dy = 0;
    distance = 1;
  }
  const normalX = dx / distance;
  const normalY = dy / distance;
  run.x = centerX + normalX * minDistance;
  run.y = centerY + normalY * minDistance;
  const inwardSpeed = run.vx * normalX + run.vy * normalY;
  if (inwardSpeed < 0) {
    run.vx -= inwardSpeed * normalX;
    run.vy -= inwardSpeed * normalY;
  }
  if (statusTimer <= 0) popStatus("blocked");
}

function pushFishOutOfEllipse(centerX, centerY, radiusX, radiusY) {
  const expandedX = radiusX + 13;
  const expandedY = radiusY + 13;
  const dx = run.x - centerX;
  const dy = run.y - centerY;
  const normalizedDistance = Math.hypot(dx / expandedX, dy / expandedY);
  if (normalizedDistance >= 1) return;
  const angle = Math.atan2(dy / expandedY, dx / expandedX);
  const normalX = Math.cos(angle);
  const normalY = Math.sin(angle);
  run.x = centerX + normalX * expandedX;
  run.y = centerY + normalY * expandedY;
  const normalLength = Math.hypot(normalX / expandedX, normalY / expandedY) || 1;
  const velocityDot = (run.vx * normalX / expandedX + run.vy * normalY / expandedY) / normalLength;
  if (velocityDot < 0) {
    run.vx -= velocityDot * (normalX / expandedX) / normalLength;
    run.vy -= velocityDot * (normalY / expandedY) / normalLength;
  }
  if (statusTimer <= 0) popStatus("blocked");
}

function pushFishOutOfPolygon(centerX, centerY, points) {
  let closestX = 0;
  let closestY = 0;
  let closestDistanceSquared = Infinity;
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i, i += 1) {
    const [x1, y1] = points[j];
    const [x2, y2] = points[i];
    const worldX1 = centerX + x1;
    const worldY1 = centerY + y1;
    const worldX2 = centerX + x2;
    const worldY2 = centerY + y2;
    const edgeX = worldX2 - worldX1;
    const edgeY = worldY2 - worldY1;
    const edgeLengthSquared = edgeX * edgeX + edgeY * edgeY;
    const progress = clamp(((run.x - worldX1) * edgeX + (run.y - worldY1) * edgeY) / edgeLengthSquared, 0, 1);
    const nearestX = worldX1 + edgeX * progress;
    const nearestY = worldY1 + edgeY * progress;
    const distanceX = run.x - nearestX;
    const distanceY = run.y - nearestY;
    const distanceSquared = distanceX * distanceX + distanceY * distanceY;
    if (distanceSquared < closestDistanceSquared) {
      closestDistanceSquared = distanceSquared;
      closestX = nearestX;
      closestY = nearestY;
    }
    if ((worldY1 > run.y) !== (worldY2 > run.y)
      && run.x < (worldX2 - worldX1) * (run.y - worldY1) / (worldY2 - worldY1) + worldX1) {
      inside = !inside;
    }
  }
  if (!inside && closestDistanceSquared >= 13 * 13) return;
  let normalX = run.x - closestX;
  let normalY = run.y - closestY;
  let normalLength = Math.hypot(normalX, normalY);
  if (normalLength < 0.001) {
    const centroidX = points.reduce((sum, point) => sum + point[0], 0) / points.length + centerX;
    const centroidY = points.reduce((sum, point) => sum + point[1], 0) / points.length + centerY;
    normalX = closestX - centroidX;
    normalY = closestY - centroidY;
    normalLength = Math.hypot(normalX, normalY) || 1;
  }
  normalX /= normalLength;
  normalY /= normalLength;
  run.x = closestX + normalX * 13;
  run.y = closestY + normalY * 13;
  const inwardSpeed = run.vx * normalX + run.vy * normalY;
  if (inwardSpeed < 0) {
    run.vx -= inwardSpeed * normalX;
    run.vy -= inwardSpeed * normalY;
  }
  if (statusTimer <= 0) popStatus("blocked");
}

function pushFishOutOfLog(centerX, centerY, size) {
  const angle = -0.14;
  const axisX = Math.cos(angle);
  const axisY = Math.sin(angle);
  const along = clamp((run.x - centerX) * axisX + (run.y - centerY) * axisY, -64 * size, 64 * size);
  const nearestX = centerX + axisX * along;
  const nearestY = centerY + axisY * along;
  pushFishOutOfSolid(nearestX, nearestY, 14 * size);
}

function resolveObstacleCollisions() {
  for (let pass = 0; pass < 3; pass += 1) {
    for (let region = 0; region < waterObstacles.length; region += 1) {
      const regionLeft = WORLD_MIN_X + region * LEVEL_WIDTH;
      for (const obstacle of waterObstacles[region]) {
        if (obstacle.solid === false) continue;
        const centerX = regionLeft + obstacle.x;
        const centerY = SURFACE_OFFSET + obstacle.depth;
        pushFishOutOfSolid(centerX, centerY, obstacle.radius);
      }
    }

    for (let region = 0; region < landscapeFeatures.length; region += 1) {
      const landscape = landscapeFeatures[region];
      const regionLeft = WORLD_MIN_X + region * LEVEL_WIDTH;
      for (const feature of landscape.features) {
        const centerX = regionLeft + feature.x;
        const centerY = SURFACE_OFFSET + feature.depth;
        const size = feature.size;
        if (landscape.style === "vents") {
          pushFishOutOfPolygon(centerX, centerY, [[-58, 36], [-48, -2], [-28, -16], [-12, 5], [6, -37], [21, -5], [42, -23], [57, 36]].map(([x, y]) => [x * size, y * size]));
        } else if (landscape.style === "marsh" || landscape.style === "pond") {
          pushFishOutOfEllipse(centerX, centerY + 40 * size, 43 * size, 13 * size);
        } else if (landscape.style === "logs") {
          pushFishOutOfLog(centerX, centerY, size);
        } else if (landscape.style === "canyon") {
          pushFishOutOfPolygon(centerX, centerY, [[-100, 46], [-82, -18], [-53, -47], [-30, -6], [-4, -79], [23, -18], [51, -54], [93, 45]].map(([x, y]) => [x * size, y * size]));
        } else if (landscape.style === "ice") {
          pushFishOutOfPolygon(centerX, centerY, [[-84, -42], [-61, -65], [-22, -50], [9, -73], [53, -48], [81, -57], [72, -22], [-73, -18]].map(([x, y]) => [x * size, y * size]));
        }
      }
    }
  }
}

function updateSplashParticles(dt) {
  for (let i = splashParticles.length - 1; i >= 0; i -= 1) {
    const particle = splashParticles[i];
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vy += 150 * dt;
    particle.life -= dt;
    if (particle.life <= 0) splashParticles.splice(i, 1);
  }
}

function drawSplashParticles() {
  if (!run) return;
  for (const particle of splashParticles) {
    const progress = 1 - particle.life / particle.maxLife;
    const alpha = Math.max(0, 1 - progress);
    const x = particle.x - run.x + width / 2;
    const y = particle.y - run.y + height / 2;
    ctx.beginPath();
    ctx.ellipse(x, y, particle.size * .65, particle.size, particle.vx * .004, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(225, 250, 236, ${alpha * .8})`;
    ctx.fill();
  }
}

function drawWaterObstacle(obstacle, x, y, time) {
  const r = obstacle.radius;
  ctx.save();
  ctx.translate(x, y);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (obstacle.type === "vent") {
    ctx.fillStyle = "rgba(48, 47, 43, .88)";
    ctx.beginPath();
    ctx.moveTo(-r, r * .5);
    ctx.lineTo(-r * .82, -r * .08);
    ctx.lineTo(-r * .45, -r * .38);
    ctx.lineTo(-r * .12, -r * .3);
    ctx.lineTo(r * .12, -r * .92);
    ctx.lineTo(r * .36, -r * .3);
    ctx.lineTo(r * .7, -r * .52);
    ctx.lineTo(r, r * .5);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 128, 67, .76)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-r * .66, r * .12);
    ctx.lineTo(-r * .34, -r * .02);
    ctx.lineTo(-r * .19, r * .2);
    ctx.moveTo(r * .55, r * .12);
    ctx.lineTo(r * .26, -r * .06);
    ctx.lineTo(r * .12, r * .2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(236, 146, 86, .75)";
    ctx.lineWidth = 3;
    for (let i = -1; i <= 1; i += 1) {
      ctx.beginPath();
      ctx.moveTo(i * r * .35, 3);
      ctx.lineTo(i * r * .3, -r * (.7 + (i === 0 ? .25 : 0)));
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(255, 190, 109, .58)";
    for (let i = 0; i < 4; i += 1) {
      const bubbleY = -((time * 30 + i * 19 + obstacle.x) % (r * 1.8));
      ctx.beginPath();
      ctx.arc(Math.sin(time + i) * r * .42, bubbleY, 2.5 + i % 2, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (obstacle.type === "roots") {
    ctx.strokeStyle = "rgba(93, 82, 52, .9)";
    ctx.lineWidth = 7;
    for (let i = -2; i <= 2; i += 1) {
      ctx.beginPath();
      ctx.moveTo(i * r * .2, -r * .85);
      ctx.bezierCurveTo(i * r * .5, -r * .2, -i * r * .35, r * .25, i * r * .4, r * .8);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(i * r * .2, -r * .35);
      ctx.lineTo(i * r * .8, r * .25);
      ctx.stroke();
    }
  } else if (obstacle.type === "weed") {
    ctx.strokeStyle = "rgba(75, 171, 129, .85)";
    ctx.fillStyle = "rgba(109, 205, 153, .6)";
    ctx.lineWidth = 5;
    for (let i = -2; i <= 2; i += 1) {
      const sway = Math.sin(time * .9 + i + obstacle.x) * 8;
      ctx.beginPath();
      ctx.moveTo(i * r * .18, r * .55);
      ctx.quadraticCurveTo(i * r * .28 + sway, 0, i * r * .2 + sway, -r * .8);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(i * r * .2 + sway, -r * .55, r * .13, r * .27, sway * .02, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (obstacle.type === "snag") {
    ctx.save();
    ctx.rotate(-.2);
    ctx.strokeStyle = "rgba(123, 104, 75, .92)";
    ctx.lineWidth = r * .35;
    ctx.beginPath();
    ctx.moveTo(-r, 0);
    ctx.lineTo(r, 0);
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-r * .35, 0);
    ctx.lineTo(-r * .7, -r * .75);
    ctx.moveTo(r * .25, 0);
    ctx.lineTo(r * .65, -r * .68);
    ctx.stroke();
    ctx.restore();
  } else if (obstacle.type === "ice") {
    ctx.fillStyle = "rgba(171, 224, 233, .6)";
    ctx.strokeStyle = "rgba(220, 248, 246, .62)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-r, r * .35);
    ctx.lineTo(-r * .72, -r * .38);
    ctx.lineTo(-r * .22, -r * .58);
    ctx.lineTo(r * .18, -r);
    ctx.lineTo(r * .44, -r * .38);
    ctx.lineTo(r, -r * .18);
    ctx.lineTo(r * .76, r * .48);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();
}

function drawBedDetails(cx, cy, bedY, time) {
  if (bedY < -20 || bedY > height + 30) return;
  const cell = 130;
  const first = Math.floor((cx - width / 2) / cell) - 1;
  const last = Math.floor((cx + width / 2) / cell) + 1;
  for (let gridX = first; gridX <= last; gridX += 1) {
    const worldX = gridX * cell + hash(gridX, 47) * cell;
    const screenX = worldX - cx + width / 2;
    const region = clamp(Math.floor((worldX - WORLD_MIN_X) / LEVEL_WIDTH), 0, habitatData.length - 1);
    const plantColor = region < 2 ? "rgba(197, 143, 94, .42)" : region > 2 ? "rgba(144, 202, 208, .42)" : "rgba(112, 190, 139, .45)";
    const ridgeY = bedY + 16 + hash(gridX, 21) * 22;
    ctx.beginPath();
    ctx.moveTo(screenX - 35, ridgeY);
    ctx.quadraticCurveTo(screenX, ridgeY - 9, screenX + 38, ridgeY + 1);
    ctx.strokeStyle = "rgba(215, 205, 158, .12)";
    ctx.lineWidth = 2;
    ctx.stroke();

    if (hash(gridX, 63) > .48) {
      const plantHeight = 16 + hash(gridX, 83) * 25;
      ctx.strokeStyle = plantColor;
      ctx.lineWidth = 2;
      for (let blade = -1; blade <= 1; blade += 1) {
        const lean = blade * 9 + Math.sin(time * .6 + gridX + blade) * 4;
        ctx.beginPath();
        ctx.moveTo(screenX + blade * 4, bedY + 4);
        ctx.quadraticCurveTo(screenX + lean, bedY - plantHeight * .55, screenX + lean + blade * 5, bedY - plantHeight);
        ctx.stroke();
      }
    } else {
      ctx.fillStyle = "rgba(222, 207, 164, .38)";
      ctx.beginPath();
      ctx.ellipse(screenX, bedY + 5, 6 + hash(gridX, 91) * 5, 3, hash(gridX, 29), Math.PI, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(222, 207, 164, .3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(screenX, bedY + 5);
      ctx.lineTo(screenX, bedY + 1);
      ctx.stroke();
    }

    if (hash(gridX, 117) > .72) {
      const clawY = bedY - 2;
      const clawSize = .9 + hash(gridX, 121) * .45;
      ctx.save();
      ctx.translate(screenX, clawY);
      ctx.scale(clawSize, clawSize);
      ctx.strokeStyle = region < 2 ? "rgba(190, 157, 119, .62)" : "rgba(165, 193, 174, .64)";
      ctx.fillStyle = region < 2 ? "rgba(115, 95, 73, .78)" : "rgba(82, 112, 101, .8)";
      ctx.beginPath();
      ctx.ellipse(0, -1, 6, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 2.8;
      ctx.lineCap = "round";
      for (const side of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(side * 3, -2);
        ctx.quadraticCurveTo(side * 9, -7, side * 14, -11);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(side * 14, -11);
        ctx.quadraticCurveTo(side * 17, -16, side * 20, -16);
        ctx.moveTo(side * 14, -11);
        ctx.quadraticCurveTo(side * 11, -16, side * 8, -16);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
}

function showScreen(id) {
  screens.forEach((screenId) => $(screenId).classList.toggle("hidden", screenId !== id));
  $("hookScreen").classList.toggle("hidden", id !== "hookScreen");
  $("game").parentElement.classList.toggle("game-active", Boolean(run && id !== "titleScreen" && id !== "geneScreen"));
  $("hud").classList.toggle("hidden", id === "titleScreen" || id === "geneScreen" || id === "pauseScreen" || (id === "deathScreen" && !run));
  $("growthProgress").classList.toggle("hidden", !run || id === "titleScreen" || id === "geneScreen" || id === "pauseScreen" || id === "deathScreen" || id === "hookScreen");
  $("ownedUpgrades").classList.toggle("hidden", !run || id === "titleScreen" || id === "geneScreen" || id === "pauseScreen" || id === "deathScreen" || id === "hookScreen");
  $("signalCard").classList.toggle("hidden", !run || id === "titleScreen" || id === "geneScreen" || id === "pauseScreen" || id === "deathScreen" || id === "hookScreen");
  $("tutorial").classList.toggle("hidden", !run || id !== null);
  $("controls").classList.toggle("hidden", !run || id === "titleScreen" || id === "geneScreen" || id === "pauseScreen" || id === "deathScreen");
}

function refreshGenes() {
  $("geneBank").textContent = genes.genes;
  $("runUpgradeCatalog").innerHTML = upgrades.map((upgrade) => `
    <article class="run-upgrade-entry">
      <strong data-i18n="${upgrade.nameKey}">${t(upgrade.nameKey)}</strong>
      <span data-i18n="${upgrade.detailKey}">${t(upgrade.detailKey)}</span>
    </article>
  `).join("");
  const items = [
    { id: "senseGene", labelKey: "geneSense", level: genes.sense, max: 3, cost: 2, text: t("senseBonus", { value: scentCooldownSeconds(Math.max(1, genes.sense)) }) },
    { id: "finGene", labelKey: "geneFin", level: genes.fins, max: 3, cost: 2, text: t("speedBonus", { value: (genes.fins * 4.5).toFixed(1) }) },
    { id: "growthGene", labelKey: "geneGrowth", level: genes.growth, max: 2, cost: 3, text: t("mealGrowthBonus", { value: genes.growth * 8 }) }
  ];
  items.forEach((item) => {
    const button = $(item.id);
    const price = item.level >= item.max ? t("maxedState") : t("genePrice", { value: item.cost });
    button.innerHTML = `<span data-i18n="${item.labelKey}">${t(item.labelKey)}</span> ${item.level}/${item.max}<b>${item.text} · ${price}</b>`;
    button.disabled = item.level >= item.max || genes.genes < item.cost;
    button.onclick = () => {
      if (item.level >= item.max || genes.genes < item.cost) return;
      genes.genes -= item.cost;
      genes[item.id === "senseGene" ? "sense" : item.id === "finGene" ? "fins" : "growth"] += 1;
      saveGenes();
      refreshGenes();
    };
  });
}

function updateOwnedUpgrades() {
  if (!run) return;
  const inherited = [
    { level: genes.sense, nameKey: "geneSense", amount: t("amountSense", { value: genes.sense, seconds: scentCooldownSeconds(genes.sense) }) },
    { level: genes.fins, nameKey: "geneFin", amount: t("speedBonus", { value: (genes.fins * 4.5).toFixed(1) }) },
    { level: genes.growth, nameKey: "geneGrowth", amount: t("mealGrowthBonus", { value: genes.growth * 8 }) }
  ].filter((upgrade) => upgrade.level > 0);
  const earned = upgrades
    .map((upgrade) => ({ ...upgrade, count: run.upgradeCounts[upgrade.id] || 0 }))
    .filter((upgrade) => upgrade.count > 0);
  const rows = [
    ...inherited.map((upgrade) => `<div class="owned-upgrade"><div><span>${t(upgrade.nameKey)}</span><small>${upgrade.amount}</small></div><b>${t("geneLevel", { level: upgrade.level })}</b></div>`),
    ...earned.map((upgrade) => {
      const amount = {
        scent: t("amountSense", { value: upgrade.count, seconds: scentCooldownSeconds(Math.min(4, genes.sense + upgrade.count)) }),
        fin: t("speedStaminaBonus", { speed: upgrade.count * 12, stamina: upgrade.count * 6 }),
        resist: t("resistBonus", { value: Math.min(75, upgrade.count * 25) }),
        gut: t("lessHunger", { value: ((1 - 0.84 ** upgrade.count) * 100).toFixed(1) }),
        growth: t("extraGrowthBar", { value: upgrade.count })
      }[upgrade.id];
      return `<div class="owned-upgrade"><div><span>${t(upgrade.nameKey)}</span><small>${amount}</small></div><b>×${upgrade.count}</b></div>`;
    })
  ];
  $("ownedUpgradeList").innerHTML = rows.length
    ? rows.join("")
    : `<div class="owned-upgrades-empty">${t("noUpgrades")}</div>`;
}

function beginRun() {
  $("statusPop").classList.add("hidden");
  statusTimer = 0;
  run = {
    x: 0, y: SURFACE_OFFSET, depth: 0, vx: 0, vy: 0, facingLeft: false, fishDirection: 0, distance: 0,
    difficulty: difficultyOptions[selectedDifficulty],
    hunger: 76, stamina: 100, meals: 0, growthMeter: 0, growthLevel: 0,
    exposure: 0, resist: 0,
    scent: genes.sense, scentCooldown: 0, speed: 1 + genes.fins * 0.045, metabolism: 1,
    staminaRegen: 28, growthBonus: genes.growth * 0.08,
    upgradeCounts: {},
    introTimer: 18, habitat: 2, bites: 0,
    splashTimer: 0,
    hookStrain: 22, hookScale: 1, hookSequence: [], hookSequenceIndex: 0,
    pullDirection: Math.random() < 0.5 ? -1 : 1, atBottom: false, cause: ""
  };
  targets.length = 0;
  splashParticles.length = 0;
  spawnTimer = 0.5;
  sonarTimer = 0;
  sonarCooldown = 0.5;
  scentTarget = null;
  scentTimer = 0;
  gameTime = 0;
  state = "playing";
  showScreen(null);
  updateOwnedUpgrades();
  updateHud();
}

function endRun(cause) {
  state = "dead";
  $("statusPop").classList.add("hidden");
  statusTimer = 0;
  run.cause = cause;
  const award = Math.max(1, Math.floor(run.distance / 450) + activeHabitat());
  run.geneAward = award;
  genes.genes += award;
  saveGenes();
  refreshGenes();
  renderDeathScreen();
  showScreen("deathScreen");
}

function renderDeathScreen() {
  const habitatIndex = activeHabitat();
  const deathKey = { hook: "Hook", freeze: "Freeze", burn: "Burn" }[run.cause] || "Hunger";
  $("deathTitle").textContent = t(`death${deathKey}Title`);
  $("deathCopy").textContent = t(`death${deathKey}Copy`);
  $("runSummary").innerHTML = `<span><span class="eyebrow">${t("maxDepth")}</span><strong>${Math.floor(run.depth).toLocaleString(language === "zh" ? "zh-CN" : language)} m</strong></span><span><span class="eyebrow">${t("habitatLabel")}</span><strong>${t(habitatData[habitatIndex].nameKey)}</strong></span><span><span class="eyebrow">${t("genePoints")}</span><strong>+${run.geneAward}</strong></span>`;
}

function isIntroductoryShallows() {
  return run.introTimer > 0 && run.depth < 250;
}

function spawnTarget() {
  const introductory = isIntroductoryShallows();
  const deepWater = deepWaterFactor();
  const baselineSignalChance = activeHabitat() === 2 ? 0.24 : 0.31;
  const foodSpawnChance = run.depth < DEEP_FOOD_SCARCITY_DEPTH
    ? 1
    : DEEP_FOOD_SPAWN_CHANCE + deepWater * 0.45;
  const signalSpawnChance = introductory ? 1 : baselineSignalChance + (1 - baselineSignalChance) * foodSpawnChance;
  if (Math.random() >= signalSpawnChance) return;
  return placeTarget(185, 390);
}

function placeTarget(minRadius, maxRadius) {
  const angle = randomBetween(0, Math.PI * 2);
  const radius = randomBetween(minRadius, maxRadius);
  const shallowSpawnBias = 180 * clamp(1 - run.depth / 500, 0, 1);
  const target = {
    x: clamp(run.x + Math.cos(angle) * radius, WORLD_MIN_X + 35, WORLD_MAX_X - 35),
    y: clamp(run.y + Math.sin(angle) * radius + shallowSpawnBias, SURFACE_OFFSET + 25, BOTTOM_Y - 70),
    frequency: randomBetween(0.955, 1.27),
    phase: randomBetween(0, Math.PI * 2),
    age: 0
  };
  targets.push(target);
  return target;
}

function useScent() {
  if (state !== "playing" || !run || run.scent <= 0) return;
  if (run.scentCooldown > 0) {
    popStatus("scentCooldown", { seconds: Math.ceil(run.scentCooldown) });
    return;
  }
  const nearest = targets.reduce((best, target) => {
    const distance = Math.hypot(target.x - run.x, target.y - run.y);
    return distance < (best ? best.distance : Infinity) ? { target, distance } : best;
  }, null);
  scentTarget = nearest && nearest.distance < 1100 ? nearest.target : placeTarget(230, 330);
  scentTimer = 7;
  run.scentCooldown = scentCooldownSeconds(run.scent);
  popStatus("scentFound");
}

function updateHud() {
  if (!run) return;
  const habitatIndex = activeHabitat();
  $("habitat").textContent = t(habitatData[habitatIndex].nameKey);
  $("temperatureLabel").textContent = t(habitatData[habitatIndex].temperatureKey).toUpperCase();
  $("hungerValue").textContent = `${Math.ceil(run.hunger)}%`;
  $("hungerFill").style.width = `${run.hunger}%`;
  $("hungerFill").style.background = run.hunger < 27 ? "linear-gradient(90deg,#e78973,#f0c079)" : "";
  $("staminaValue").textContent = `${Math.ceil(run.stamina)}%`;
  $("staminaFill").style.width = `${run.stamina}%`;
  const growthPercent = run.growthMeter / 3 * 100;
  $("growthFill").style.width = `${growthPercent}%`;
  $("growthValue").textContent = `${Math.min(3, Math.floor(run.growthMeter))} / 3`;
  $("growthLevelValue").textContent = t("fishLevel", { level: run.growthLevel + 1 });
  $("upgradeProgressFill").style.width = `${growthPercent}%`;
  $("growthProgressTrack").setAttribute("aria-valuenow", String(Math.round(growthPercent)));
  $("growthProgressTrack").setAttribute("aria-valuetext", t("growthAriaValue", { value: run.growthMeter.toFixed(1) }));
  $("depthValue").textContent = `${Math.floor(run.depth).toLocaleString()} / ${BOTTOM_DEPTH.toLocaleString()} m`;
  const showExposure = run.exposure > 0.5;
  $("exposureStat").classList.toggle("hidden", !showExposure);
  $("exposureStat").classList.toggle("burning", run.exposureKind === "burn");
  $("exposureLabel").textContent = t(run.exposureKind === "burn" ? "burningLevel" : "freezingLevel");
  $("exposureFill").style.width = `${run.exposure}%`;
  $("exposureValue").textContent = `${Math.ceil(run.exposure)}%`;
  $("scentControl").classList.toggle("hidden", run.scent <= 0);
  $("scentControl").classList.toggle("cooling", run.scentCooldown > 0);
  if (run.introTimer > 0 && run.depth < 250) {
    $("tutorial").innerHTML = `<span class="eyebrow">${t("safeShallows", { seconds: Math.ceil(run.introTimer) })}</span><br>${t("safeTutorial")}`;
  } else {
    const habitat = habitatData[habitatIndex];
    const currentHint = habitatIndex < 2
      ? t("warmCurrent")
      : habitatIndex > 2
        ? t("coldCurrent")
        : t("pondCalm");
    $("tutorial").innerHTML = `<span class="eyebrow">${t("habitatTemperature", { habitat: t(habitat.nameKey), temperature: t(habitat.temperatureKey).toUpperCase() })}</span><br>${currentHint}`;
  }
}

function popStatus(key, values = {}) {
  statusMessageKey = key;
  statusMessageValues = values;
  renderStatus();
  $("statusPop").classList.remove("hidden");
  statusTimer = 1.8;
}

function renderStatus() {
  const values = { ...statusMessageValues };
  if (values.nameKey) {
    values.name = t(values.nameKey);
    delete values.nameKey;
  }
  $("statusPop").textContent = t(statusMessageKey, values);
}

function showHabitatToast(habitatIndex) {
  $("habitatToast").textContent = t(habitatData[habitatIndex].nameKey).toUpperCase();
  $("habitatToast").classList.remove("hidden", "show");
  void $("habitatToast").offsetWidth;
  $("habitatToast").classList.add("show");
  habitatToastTimer = 2.5;
}

function awardMeal() {
  run.bites += 1;
  run.hunger = Math.min(100, run.hunger + 25);
  run.meals += 1;
  run.growthMeter += 1 + run.growthBonus;
  popStatus("goodBite");
  if (run.growthMeter >= 3) {
    run.growthMeter -= 3;
    run.growthLevel += 1;
    state = "upgrade";
    showUpgradeChoices();
  }
}

function resolveBite() {
  if (Math.random() < 0.5) {
    run.hunger = Math.min(100, run.hunger + BAIT_HUNGER_RESTORE);
    startHook();
  } else {
    awardMeal();
  }
}

function showUpgradeChoices() {
  const available = upgrades.filter((upgrade) => {
    if (upgrade.id === "scent") return run.scent < 4;
    if (upgrade.id === "resist") return run.resist < 0.75;
    if (upgrade.id === "growth") return !run.upgradeCounts.growth;
    if (upgrade.id === "fin") return run.speed < 1.65;
    return true;
  });
  const choices = run.upgradeChoiceIds
    ? run.upgradeChoiceIds.map((id) => upgrades.find((upgrade) => upgrade.id === id)).filter(Boolean)
    : available.sort(() => Math.random() - 0.5).slice(0, 3);
  run.upgradeChoiceIds = choices.map((upgrade) => upgrade.id);
  $("upgradeOptions").innerHTML = "";
  choices.forEach((upgrade) => {
    const button = document.createElement("button");
    button.className = "upgrade-choice";
    button.innerHTML = `<span><strong data-i18n="${upgrade.nameKey}">${t(upgrade.nameKey)}</strong><small data-i18n="${upgrade.detailKey}">${t(upgrade.detailKey)}</small></span><span>+</span>`;
    button.onclick = () => {
      upgrade.apply(run);
      run.upgradeCounts[upgrade.id] = (run.upgradeCounts[upgrade.id] || 0) + 1;
      run.upgradeChoiceIds = null;
      state = "playing";
      showScreen(null);
      updateOwnedUpgrades();
      popStatus("acquired", { nameKey: upgrade.nameKey });
    };
    $("upgradeOptions").appendChild(button);
  });
  showScreen("upgradeScreen");
}

function startHook() {
  state = "hooked";
  run.hookStrain = 24;
  run.pullDirection = Math.random() < 0.5 ? -1 : 1;
  const timeTier = Math.min(4, Math.floor(gameTime / 75));
  const upgradeTier = Math.min(3, Math.floor(run.growthLevel / 2));
  run.hookScale = 1 + Math.min(0.6, (timeTier + run.growthLevel) * 0.05);
  const sequenceLength = Math.min(12, Math.max(3, habitatData[activeHabitat()].hookLength + run.difficulty.hookSequenceOffset + timeTier + upgradeTier));
  run.hookSequence = [];
  run.hookSequenceIndex = 0;
  for (let i = 0; i < sequenceLength; i += 1) {
    const options = swimKeys.filter((key) => key.code !== run.hookSequence[i - 1]?.code);
    run.hookSequence.push(options[Math.floor(Math.random() * options.length)]);
  }
  keys.clear();
  $("hookTitle").textContent = t("hooked");
  renderHookSequence();
  updateHookUi();
  showScreen("hookScreen");
}

function renderHookSequence() {
  $("sequenceProgress").textContent = `${run.hookSequenceIndex} / ${run.hookSequence.length}`;
  $("escapeValue").textContent = `${run.hookSequenceIndex} / ${run.hookSequence.length}`;
  $("escapeFill").style.width = `${run.hookSequenceIndex / run.hookSequence.length * 100}%`;
  $("keySequence").innerHTML = run.hookSequence.map((key, index) => {
    const className = index < run.hookSequenceIndex ? "completed" : index === run.hookSequenceIndex ? "current" : "";
    return `<span class="sequence-key ${className}">${key.symbol}</span>`;
  }).join("");
}

function handleHookKey(code) {
  const keyCode = ({
    ArrowUp: "KeyW",
    ArrowLeft: "KeyA",
    ArrowDown: "KeyS",
    ArrowRight: "KeyD"
  })[code] || code;
  const expected = run.hookSequence[run.hookSequenceIndex];
  if (!swimKeys.some((key) => key.code === keyCode)) return;
  if (keyCode === expected.code) {
    run.hookSequenceIndex += 1;
    run.hookStrain = Math.max(0, run.hookStrain - 8);
    renderHookSequence();
    if (run.hookSequenceIndex === run.hookSequence.length) {
      state = "playing";
      showScreen(null);
      run.hunger = Math.max(0, run.hunger - 8);
      popStatus("slippedFree");
      return;
    }
  } else {
    run.hookStrain += run.difficulty.mistakeHookStrain * run.hookScale;
    renderHookSequence();
  }
  run.hookStrain = clamp(run.hookStrain, 0, 100);
  updateHookUi();
  if (run.hookStrain >= 100) endRun("hook");
}

function isPressed(...codes) {
  return codes.some((code) => keys.has(code));
}

function updateHookUi() {
  $("forceArrow").textContent = run.pullDirection < 0 ? "←" : "→";
  $("strainValue").textContent = `${Math.round(run.hookStrain)}%`;
  $("strainFill").style.width = `${clamp(run.hookStrain, 0, 100)}%`;
}

function updateHook(dt) {
  run.hookStrain += run.difficulty.passiveHookStrain * run.hookScale * dt;
  run.hookStrain = clamp(run.hookStrain, 0, 100);
  updateHookUi();
  if (run.hookStrain >= 100) endRun("hook");
}

function update(dt) {
  updateSplashParticles(dt);
  if (state === "hooked") {
    updateHook(dt);
    return;
  }
  if (state !== "playing") return;
  gameTime += dt;
  run.introTimer = Math.max(0, run.introTimer - dt);
  const wasHabitat = run.habitat;
  run.habitat = activeHabitat();
  if (wasHabitat !== run.habitat) {
    showHabitatToast(run.habitat);
  }

  const horizontal = (isPressed("ArrowRight", "KeyD") ? 1 : 0) - (isPressed("ArrowLeft", "KeyA") ? 1 : 0);
  const vertical = (isPressed("ArrowDown", "KeyS") ? 1 : 0) - (isPressed("ArrowUp", "KeyW") ? 1 : 0);
  const magnitude = Math.hypot(horizontal, vertical);
  const burst = (isPressed("ShiftLeft", "ShiftRight") || isPressed("Space")) && run.stamina > 1 && magnitude > 0;
  if (burst) run.stamina = Math.max(0, run.stamina - 38 * dt);
  else run.stamina = Math.min(100, run.stamina + run.staminaRegen * dt);
  const habitat = habitatData[activeHabitat()];
  const speed = 175 * run.speed * (burst ? 1.62 : 1) * (1 - run.stamina * 0.0001);
  const inputX = magnitude ? horizontal / Math.max(1, magnitude) : 0;
  const inputY = magnitude ? vertical / Math.max(1, magnitude) : 0;
  const accel = 7.5;
  run.vx += (inputX * speed + habitat.current[0] * 72 - run.vx) * Math.min(1, accel * dt);
  run.vy += (inputY * speed + habitat.current[1] * 72 - run.vy) * Math.min(1, accel * dt);
  run.x = clamp(run.x + run.vx * dt, WORLD_MIN_X, WORLD_MAX_X);
  if ((run.x === WORLD_MIN_X && run.vx < 0) || (run.x === WORLD_MAX_X && run.vx > 0)) run.vx = 0;
  const previousY = run.y;
  run.y = clamp(run.y + run.vy * dt, SURFACE_OFFSET, BOTTOM_Y);
  if ((run.y === SURFACE_OFFSET && run.vy < 0) || (run.y === BOTTOM_Y && run.vy > 0)) run.vy = 0;
  resolveObstacleCollisions();
  run.x = clamp(run.x, WORLD_MIN_X, WORLD_MAX_X);
  run.y = clamp(run.y, SURFACE_OFFSET, BOTTOM_Y);
  run.depth = run.y - SURFACE_OFFSET;
  if (run.y === BOTTOM_Y && !run.atBottom) popStatus("riverbedHolds");
  run.atBottom = run.y === BOTTOM_Y;
  if (run.y === SURFACE_OFFSET && previousY > SURFACE_OFFSET) popStatus("surfaceHolds");
  run.fishDirection = fishDirectionFromVelocity(run.vx, run.vy, run.fishDirection);
  run.facingLeft = run.fishDirection === 3 || run.fishDirection === 4 || run.fishDirection === 5;
  if (run.depth < 24 && Math.hypot(run.vx, run.vy) > 28) {
    run.splashTimer -= dt;
    if (run.splashTimer <= 0) {
      const splashX = run.x + randomBetween(-10, 10);
      for (let i = 0; i < 4; i += 1) {
        const particle = { x: splashX + randomBetween(-8, 8), y: SURFACE_OFFSET - randomBetween(1, 8), vx: run.vx * .1 + randomBetween(-48, 48), vy: -randomBetween(48, 112), life: randomBetween(.28, .52), size: randomBetween(2, 4) };
        particle.maxLife = particle.life;
        splashParticles.push(particle);
      }
      run.splashTimer = randomBetween(.1, .18);
    }
  } else {
    run.splashTimer = 0;
  }
  run.distance = Math.max(run.distance, Math.hypot(run.x, run.depth));
  run.hunger = Math.max(0, run.hunger - 0.75 * run.metabolism * run.difficulty.hungerDrain * (burst ? 1.7 : 1) * dt);
  if (run.hunger <= 0) {
    endRun("hunger");
    return;
  }

  const extreme = run.habitat === 0 ? "burn" : run.habitat === habitatData.length - 1 ? "freeze" : null;
  if (extreme) {
    run.exposure = Math.min(100, run.exposure + 3.2 * (1 - run.resist) * dt);
    run.exposureKind = extreme;
  } else {
    run.exposure = Math.max(0, run.exposure - 6 * dt);
  }
  if (run.exposure >= 100) {
    endRun(run.exposureKind);
    return;
  }

  sonarCooldown -= dt;
  if (sonarCooldown <= 0) {
    sonarTimer = 2.2;
    sonarCooldown = 4.8;
  }

  spawnTimer -= dt;
  const nearby = targets.filter((target) => Math.hypot(target.x - run.x, target.y - run.y) < 640);
  const deepWater = deepWaterFactor();
  const maxActiveTargets = MAX_ACTIVE_TARGETS + Math.floor(deepWater * DEEP_EXTRA_ACTIVE_TARGETS);
  const maxNearbyTargets = MAX_NEARBY_TARGETS + Math.floor(deepWater * DEEP_EXTRA_NEARBY_TARGETS);
  if (spawnTimer <= 0 && nearby.length < maxNearbyTargets && targets.length < maxActiveTargets) {
    spawnTarget();
    const intervalScale = 1 - deepWater * 0.3;
    spawnTimer = randomBetween(3.5, 5) * intervalScale;
  }
  for (const target of targets) {
    target.age += dt;
    const targetHabitat = habitatData[clamp(Math.floor((target.x - WORLD_MIN_X) / LEVEL_WIDTH), 0, habitatData.length - 1)];
    const driftPhase = target.age * 1.1 + target.phase;
    target.x = clamp(target.x + (Math.cos(driftPhase) * 16 + targetHabitat.current[0] * 12) * dt, WORLD_MIN_X + 25, WORLD_MAX_X - 25);
    target.y = clamp(target.y + (Math.sin(driftPhase * 1.4) * 9 + targetHabitat.current[1] * 10) * dt, SURFACE_OFFSET + 25, BOTTOM_Y - 70);
  }
  const touchedTargetIndex = targets.findIndex((target) => Math.hypot(target.x - run.x, target.y - run.y) < 25);
  if (touchedTargetIndex !== -1) {
    targets.splice(touchedTargetIndex, 1);
    resolveBite();
    if (state !== "playing") return;
  }
  for (let i = targets.length - 1; i >= 0; i -= 1) {
    if (Math.hypot(targets[i].x - run.x, targets[i].y - run.y) > 760 || targets[i].age > 48) targets.splice(i, 1);
  }
  sonarTimer = Math.max(0, sonarTimer - dt);
  run.scentCooldown = Math.max(0, run.scentCooldown - dt);
  scentTimer = Math.max(0, scentTimer - dt);
  if (!scentTimer || !targets.includes(scentTarget)) scentTarget = null;
  habitatToastTimer = Math.max(0, habitatToastTimer - dt);
  if (habitatToastTimer === 0) $("habitatToast").classList.add("hidden");
  statusTimer = Math.max(0, statusTimer - dt);
  if (statusTimer === 0) $("statusPop").classList.add("hidden");
  updateHud();
}

function resize() {
  pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * pixelRatio);
  canvas.height = Math.floor(height * pixelRatio);
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function hash(x, y) {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function blendHex(first, second, amount) {
  const start = Number.parseInt(first.slice(1), 16);
  const end = Number.parseInt(second.slice(1), 16);
  const channel = (shift) => Math.round(((start >> shift) & 255) * (1 - amount) + ((end >> shift) & 255) * amount);
  return `rgb(${channel(16)}, ${channel(8)}, ${channel(0)})`;
}

function colorAtWorldX(worldX, colorIndex) {
  const palettePosition = clamp((worldX - WORLD_MIN_X) / LEVEL_WIDTH - 0.5, 0, habitatData.length - 1);
  const leftIndex = Math.floor(palettePosition);
  const rightIndex = Math.min(habitatData.length - 1, leftIndex + 1);
  return blendHex(habitatData[leftIndex].color[colorIndex], habitatData[rightIndex].color[colorIndex], palettePosition - leftIndex);
}

function fisherBoatWorldX(time) {
  return Math.sin(time * 0.12) * 320;
}

function drawFisherBoat(x, surfaceY, time) {
  const bob = Math.sin(time * 1.1) * 2;
  const boatY = surfaceY - 12 + bob;
  ctx.save();
  ctx.translate(x, boatY);

  ctx.fillStyle = "rgba(42, 53, 49, .9)";
  ctx.beginPath();
  ctx.moveTo(-42, -2);
  ctx.lineTo(39, -2);
  ctx.lineTo(28, 9);
  ctx.lineTo(-29, 8);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(233, 218, 178, .56)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-30, 2);
  ctx.lineTo(30, 2);
  ctx.stroke();

  ctx.fillStyle = "rgba(51, 61, 55, .88)";
  ctx.fillRect(-13, -13, 25, 9);
  ctx.beginPath();
  ctx.arc(-1, -20, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-1, -15);
  ctx.lineTo(1, -6);
  ctx.moveTo(0, -12);
  ctx.lineTo(-8, -8);
  ctx.stroke();

  const rodTipX = -39;
  const rodTipY = -30 + Math.sin(time * 1.7) * 2;
  ctx.strokeStyle = "rgba(54, 59, 48, .82)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-7, -13);
  ctx.quadraticCurveTo(-19, -25, rodTipX, rodTipY);
  ctx.stroke();
  ctx.restore();

  const lineX = x + rodTipX;
  ctx.strokeStyle = "rgba(71, 62, 48, .62)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(lineX, boatY + rodTipY);
  ctx.lineTo(lineX + 7, surfaceY);
  ctx.stroke();
}

function drawLighthouse(x, surfaceY, size, time) {
  ctx.save();
  ctx.translate(x, surfaceY);
  ctx.scale(size, size);
  ctx.fillStyle = "rgba(42, 58, 58, .72)";
  ctx.beginPath();
  ctx.moveTo(-34, 1);
  ctx.lineTo(-24, -8);
  ctx.lineTo(27, -8);
  ctx.lineTo(39, 2);
  ctx.lineTo(27, 11);
  ctx.lineTo(-28, 9);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(230, 222, 190, .92)";
  ctx.beginPath();
  ctx.moveTo(-10, -8);
  ctx.lineTo(-7, -54);
  ctx.lineTo(7, -54);
  ctx.lineTo(11, -8);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgba(196, 100, 81, .86)";
  ctx.fillRect(-8, -40, 17, 7);
  ctx.fillRect(-9, -20, 18, 7);
  ctx.fillStyle = "rgba(53, 68, 64, .92)";
  ctx.fillRect(-10, -60, 21, 8);
  ctx.beginPath();
  ctx.moveTo(-13, -60);
  ctx.lineTo(0, -69);
  ctx.lineTo(14, -60);
  ctx.closePath();
  ctx.fill();

  const lamp = ctx.createRadialGradient(0, -56, 1, 0, -56, 20);
  lamp.addColorStop(0, `rgba(255, 238, 164, ${.6 + Math.sin(time * 1.3) * .08})`);
  lamp.addColorStop(1, "rgba(255, 230, 145, 0)");
  ctx.fillStyle = lamp;
  ctx.fillRect(-21, -77, 42, 42);
  ctx.fillStyle = "rgba(255, 247, 196, .94)";
  ctx.fillRect(-3, -58, 6, 5);
  ctx.restore();
}

function drawPenguin(x, surfaceY, size, time, direction) {
  ctx.save();
  ctx.translate(x, surfaceY + Math.sin(time * 1.2) * 0.45);
  ctx.scale(size * direction, size);
  ctx.fillStyle = "rgba(35, 54, 62, .94)";
  ctx.beginPath();
  ctx.ellipse(0, -12, 7, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, -24, 6, 0, Math.PI * 2);
  ctx.fill();
  const flap = Math.sin(time * 3) * 0.5;
  ctx.beginPath();
  ctx.moveTo(-5, -18);
  ctx.quadraticCurveTo(-10, -19 + flap, -10.5, -11 + flap);
  ctx.quadraticCurveTo(-10.5, -6 + flap, -8, -5);
  ctx.lineTo(-4, -11);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(5, -18);
  ctx.quadraticCurveTo(10, -19 - flap, 10.5, -11 - flap);
  ctx.quadraticCurveTo(10.5, -6 - flap, 8, -5);
  ctx.lineTo(4, -11);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgba(237, 235, 215, .94)";
  ctx.beginPath();
  ctx.ellipse(1, -12, 4, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(218, 161, 78, .96)";
  ctx.beginPath();
  ctx.moveTo(5, -24);
  ctx.lineTo(12, -22);
  ctx.lineTo(5, -20);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(-5, -2, 4, 2);
  ctx.fillRect(2, -2, 4, 2);
  ctx.restore();
}

function drawIceberg(x, surfaceY, size, time) {
  ctx.save();
  ctx.translate(x, surfaceY);
  ctx.scale(size, size);
  ctx.fillStyle = "rgba(114, 181, 198, .3)";
  ctx.beginPath();
  ctx.moveTo(-142, -8);
  ctx.lineTo(-127, 25);
  ctx.lineTo(-108, 82);
  ctx.lineTo(112, 82);
  ctx.lineTo(132, 24);
  ctx.lineTo(145, -8);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(195, 225, 226, .88)";
  ctx.beginPath();
  ctx.moveTo(-142, -4);
  ctx.lineTo(-122, -14);
  ctx.lineTo(-98, -12);
  ctx.lineTo(-73, -18);
  ctx.lineTo(78, -18);
  ctx.lineTo(101, -13);
  ctx.lineTo(122, -15);
  ctx.lineTo(145, -5);
  ctx.lineTo(132, 7);
  ctx.lineTo(-128, 7);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(236, 250, 242, .76)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-136, -4);
  ctx.lineTo(-121, -12);
  ctx.moveTo(114, -11);
  ctx.lineTo(137, -4);
  ctx.stroke();

  ctx.strokeStyle = "rgba(218, 244, 235, .78)";
  ctx.lineWidth = 2;
  for (let row = 0; row < 2; row += 1) {
    ctx.beginPath();
    for (let waveX = -150; waveX <= 150; waveX += 12) {
      const waveY = 2 + row * 5 + Math.sin(waveX * .04 + time * 2 + row) * 1.5;
      if (waveX === -150) ctx.moveTo(waveX, waveY);
      else ctx.lineTo(waveX, waveY);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function drawSurfaceLandscape(landscape, x, surfaceY, time) {
  if (landscape.type === "iceberg") {
    drawIceberg(x, surfaceY, landscape.size, time);
    const walkPhase = time * .32;
    const animalX = x + Math.sin(walkPhase) * 66 * landscape.size;
    const animalY = surfaceY - 18 * landscape.size;
    if (landscape.wildlife === "penguin") {
      const direction = Math.cos(walkPhase) < 0 ? -1 : 1;
      drawPenguin(animalX, animalY, landscape.size * .72, time, direction);
    }
    return;
  }

  ctx.save();
  ctx.translate(x, surfaceY);
  ctx.scale(landscape.size, landscape.size);
  if (landscape.type === "geothermal-shore") {
    const glow = ctx.createRadialGradient(0, 14, 3, 0, 14, 90);
    glow.addColorStop(0, "rgba(255, 121, 60, .3)");
    glow.addColorStop(1, "rgba(255, 121, 60, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(-100, -20, 200, 120);
    ctx.fillStyle = "rgba(43, 43, 41, .9)";
    ctx.beginPath();
    ctx.moveTo(-96, 17);
    ctx.lineTo(-76, -5);
    ctx.lineTo(-43, -10);
    ctx.lineTo(-21, 1);
    ctx.lineTo(0, -8);
    ctx.lineTo(27, 2);
    ctx.lineTo(47, -9);
    ctx.lineTo(77, -4);
    ctx.lineTo(98, 14);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 128, 59, .94)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-60, 3);
    ctx.lineTo(-39, 12);
    ctx.lineTo(-26, 4);
    ctx.moveTo(42, 3);
    ctx.lineTo(26, 12);
    ctx.lineTo(17, 7);
    ctx.stroke();
    for (let puff = 0; puff < 3; puff += 1) {
      const offset = (time * 5 + puff * 17) % 28;
      ctx.fillStyle = `rgba(87, 82, 75, ${.24 - puff * .04})`;
      ctx.beginPath();
      ctx.arc(27 + Math.sin(time * .7 + puff) * 5, -12 - offset, 4 + puff * 2, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (landscape.type === "marsh-shore") {
    ctx.fillStyle = "rgba(78, 91, 69, .84)";
    ctx.beginPath();
    ctx.moveTo(-96, 12);
    ctx.quadraticCurveTo(-58, -7, -18, 3);
    ctx.quadraticCurveTo(24, -9, 70, 4);
    ctx.lineTo(92, 14);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(139, 156, 100, .92)";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    for (const reedX of [-74, -48, -24, 16, 42, 65]) {
      const sway = Math.sin(time * .6 + reedX) * 4;
      ctx.beginPath();
      ctx.moveTo(reedX, 2);
      ctx.quadraticCurveTo(reedX + sway, -30, reedX + sway * .6, -67 - Math.abs(reedX % 3) * 5);
      ctx.stroke();
    }
  } else if (landscape.type === "wooded-shore") {
    ctx.fillStyle = "rgba(62, 82, 65, .86)";
    ctx.beginPath();
    ctx.moveTo(-126, 11);
    ctx.quadraticCurveTo(-83, -9, -37, 2);
    ctx.quadraticCurveTo(12, -14, 66, 2);
    ctx.quadraticCurveTo(104, -8, 128, 13);
    ctx.closePath();
    ctx.fill();
    for (const tree of [{ x: -73, h: 52 }, { x: -25, h: 69 }, { x: 41, h: 48 }, { x: 83, h: 62 }]) {
      ctx.fillStyle = "rgba(43, 66, 57, .94)";
      ctx.beginPath();
      ctx.moveTo(tree.x, -tree.h);
      ctx.lineTo(tree.x - 14, -tree.h * .48);
      ctx.lineTo(tree.x - 7, -tree.h * .48);
      ctx.lineTo(tree.x - 21, -tree.h * .12);
      ctx.lineTo(tree.x + 20, -tree.h * .12);
      ctx.lineTo(tree.x + 7, -tree.h * .48);
      ctx.lineTo(tree.x + 15, -tree.h * .48);
      ctx.closePath();
      ctx.fill();
      ctx.fillRect(tree.x - 2, -tree.h * .12, 4, tree.h * .12);
    }
  }
  ctx.restore();

  if (landscape.type === "marsh-shore") {
    drawLighthouse(x + 34 * landscape.size, surfaceY, landscape.size * .78, time);
  }
}

function drawPlantAnchorRock(color) {
  ctx.fillStyle = "rgba(20, 39, 40, .72)";
  ctx.beginPath();
  ctx.ellipse(0, 38, 43, 13, 0, Math.PI, Math.PI * 2);
  ctx.lineTo(43, 40);
  ctx.quadraticCurveTo(0, 55, -43, 40);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = `${color}66`;
  ctx.beginPath();
  ctx.ellipse(-19, 37, 17, 7, -.18, Math.PI, Math.PI * 2);
  ctx.ellipse(15, 39, 22, 8, .12, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(207, 221, 192, .26)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-26, 34);
  ctx.quadraticCurveTo(-18, 30, -10, 34);
  ctx.moveTo(7, 36);
  ctx.quadraticCurveTo(18, 31, 27, 36);
  ctx.stroke();
}

function drawSmallPlantStone(x, rootY, region) {
  ctx.save();
  ctx.translate(x, rootY);
  ctx.fillStyle = region < 2 ? "rgba(57, 54, 47, .64)" : "rgba(35, 56, 59, .68)";
  ctx.beginPath();
  ctx.moveTo(-17, 6);
  ctx.quadraticCurveTo(-15, -1, -8, -3);
  ctx.quadraticCurveTo(-2, -7, 4, -3);
  ctx.quadraticCurveTo(12, -6, 17, 2);
  ctx.lineTo(15, 9);
  ctx.quadraticCurveTo(0, 13, -16, 9);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = region < 2 ? "rgba(197, 168, 123, .28)" : "rgba(178, 207, 187, .28)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-9, 1);
  ctx.quadraticCurveTo(-4, -2, 0, 0);
  ctx.moveTo(4, 2);
  ctx.quadraticCurveTo(8, -1, 11, 2);
  ctx.stroke();
  ctx.restore();
}

function drawSeagulls(skyHeight, time) {
  if (skyHeight < 45) return;
  const flockCount = Math.min(3, Math.ceil(width / 520));
  for (let flock = 0; flock < flockCount; flock += 1) {
    const x = (flock * width / flockCount + time * (12 + flock * 3)) % (width + 80) - 40;
    const y = 24 + flock * 17 + Math.sin(time * .55 + flock * 2) * 4;
    if (y > skyHeight - 15) continue;
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = "rgba(49, 65, 63, .62)";
    ctx.lineWidth = 1.8;
    ctx.lineCap = "round";
    for (let bird = 0; bird < 3; bird += 1) {
      const offset = bird * 12;
      const flap = Math.sin(time * 2.1 + flock + bird * .7) * 2;
      ctx.beginPath();
      ctx.moveTo(offset - 6, flap);
      ctx.quadraticCurveTo(offset - 2, -4 - flap, offset, 0);
      ctx.quadraticCurveTo(offset + 4, -4 + flap, offset + 8, flap);
      ctx.stroke();
    }
    ctx.restore();
  }
}

function drawLandscapeFeature(style, color, x, y, size, time) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (style === "vents") {
    const magmaGlow = ctx.createRadialGradient(0, 16, 2, 0, 16, 88);
    magmaGlow.addColorStop(0, "rgba(255, 112, 55, .2)");
    magmaGlow.addColorStop(1, "rgba(255, 112, 55, 0)");
    ctx.fillStyle = magmaGlow;
    ctx.fillRect(-88, -72, 176, 176);
    ctx.fillStyle = "rgba(29, 35, 38, .78)";
    ctx.beginPath();
    ctx.moveTo(-58, 36);
    ctx.lineTo(-48, -2);
    ctx.lineTo(-28, -16);
    ctx.lineTo(-12, 5);
    ctx.lineTo(6, -37);
    ctx.lineTo(21, -5);
    ctx.lineTo(42, -23);
    ctx.lineTo(57, 36);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 123, 61, .82)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-42, 18);
    ctx.lineTo(-29, 7);
    ctx.lineTo(-23, 15);
    ctx.moveTo(39, 17);
    ctx.lineTo(27, 3);
    ctx.lineTo(22, 12);
    ctx.moveTo(-7, 27);
    ctx.lineTo(0, 17);
    ctx.lineTo(6, 25);
    ctx.stroke();
    ctx.strokeStyle = `${color}99`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-28, 1);
    ctx.quadraticCurveTo(-41, -29, -31 + Math.sin(time + x) * 8, -65);
    ctx.moveTo(13, -9);
    ctx.quadraticCurveTo(27, -36, 19 + Math.sin(time * .8 + x) * 9, -77);
    ctx.stroke();
    for (let i = 0; i < 4; i += 1) {
      const bubbleY = -18 - ((time * 24 + i * 21 + x) % 72);
      ctx.beginPath();
      ctx.arc(-30 + i * 16 + Math.sin(time + i) * 5, bubbleY, 2.5 + (i % 2), 0, Math.PI * 2);
      ctx.fillStyle = `${color}99`;
      ctx.fill();
    }
  } else if (style === "marsh") {
    drawPlantAnchorRock(color);
    ctx.strokeStyle = `${color}88`;
    ctx.lineWidth = 5;
    for (let i = -2; i <= 2; i += 1) {
      const baseX = i * 17;
      const baseY = 38 - 13 * Math.sqrt(1 - (baseX / 43) ** 2);
      const bend = Math.sin(time * .7 + i + x * .01) * 11;
      ctx.beginPath();
      ctx.moveTo(baseX, baseY);
      ctx.quadraticCurveTo(baseX + bend, 4, baseX - bend * .4, -61 - Math.abs(i) * 7);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(baseX - bend * .4, -48 - Math.abs(i) * 7, 4, 11, i * .16, 0, Math.PI * 2);
      ctx.fillStyle = `${color}bb`;
      ctx.fill();
    }
    ctx.strokeStyle = "rgba(41, 57, 49, .5)";
    ctx.lineWidth = 2;
    for (let i = -2; i <= 2; i += 1) {
      ctx.beginPath();
      ctx.moveTo(i * 13, 38);
      ctx.quadraticCurveTo(i * 18 + 18, 64, i * 20 + 34, 83);
      ctx.stroke();
    }
  } else if (style === "pond") {
    drawPlantAnchorRock(color);
    ctx.strokeStyle = `${color}99`;
    ctx.lineWidth = 3;
    for (let i = -2; i <= 2; i += 1) {
      const baseX = i * 15;
      const baseY = 38 - 13 * Math.sqrt(1 - (baseX / 43) ** 2);
      const sway = Math.sin(time * .8 + i + x * .01) * 9;
      ctx.beginPath();
      ctx.moveTo(baseX, baseY);
      ctx.quadraticCurveTo(i * 13 + sway, 0, i * 19 + sway * .6, -72 - (i % 2) * 15);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(i * 19 + sway * .6, -68 - (i % 2) * 15, 6, 15, sway * .02, 0, Math.PI * 2);
      ctx.fillStyle = `${color}77`;
      ctx.fill();
    }
    ctx.fillStyle = "rgba(119, 198, 154, .64)";
    ctx.beginPath();
    ctx.ellipse(-24, -31, 24, 7, -.18, 0, Math.PI * 2);
    ctx.ellipse(25, -48, 18, 6, .15, 0, Math.PI * 2);
    ctx.fill();
  } else if (style === "logs") {
    ctx.save();
    ctx.rotate(-.14);
    ctx.fillStyle = "rgba(23, 44, 55, .72)";
    ctx.beginPath();
    ctx.roundRect(-78, -14, 156, 28, 14);
    ctx.fill();
    ctx.strokeStyle = `${color}77`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(-77, 0, 8, 14, 0, 0, Math.PI * 2);
    ctx.moveTo(-28, -10);
    ctx.lineTo(-36, 12);
    ctx.moveTo(28, -11);
    ctx.lineTo(22, 8);
    ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = `${color}88`;
    ctx.lineWidth = 3;
    for (let i = -2; i <= 2; i += 1) {
      ctx.beginPath();
      ctx.moveTo(i * 24, -8);
      ctx.quadraticCurveTo(i * 20 + 10, -34, i * 22 + 14, -53 - (i % 2) * 12);
      ctx.stroke();
    }
  } else if (style === "canyon") {
    ctx.fillStyle = "rgba(21, 44, 62, .42)";
    ctx.beginPath();
    ctx.moveTo(-100, 46);
    ctx.lineTo(-82, -18);
    ctx.lineTo(-53, -47);
    ctx.lineTo(-30, -6);
    ctx.lineTo(-4, -79);
    ctx.lineTo(23, -18);
    ctx.lineTo(51, -54);
    ctx.lineTo(93, 45);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = `${color}88`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-78, -9);
    ctx.quadraticCurveTo(-48, -25, -29, -1);
    ctx.moveTo(0, -44);
    ctx.quadraticCurveTo(28, -16, 54, -38);
    ctx.stroke();
    ctx.fillStyle = "rgba(181, 219, 207, .24)";
    ctx.beginPath();
    ctx.ellipse(-4, 8, 14, 4, -.15, 0, Math.PI * 2);
    ctx.ellipse(42, 27, 18, 5, .12, 0, Math.PI * 2);
    ctx.fill();
  } else if (style === "ice") {
    ctx.fillStyle = "rgba(178, 223, 229, .22)";
    ctx.beginPath();
    ctx.moveTo(-84, -42);
    ctx.lineTo(-61, -65);
    ctx.lineTo(-22, -50);
    ctx.lineTo(9, -73);
    ctx.lineTo(53, -48);
    ctx.lineTo(81, -57);
    ctx.lineTo(72, -22);
    ctx.lineTo(-73, -18);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = `${color}77`;
    for (let i = -2; i <= 2; i += 1) {
      const shardX = i * 29 + 8;
      const shardLength = 24 + (i + 2) % 3 * 15;
      ctx.beginPath();
      ctx.moveTo(shardX - 9, -31);
      ctx.lineTo(shardX, -31 + shardLength);
      ctx.lineTo(shardX + 9, -31);
      ctx.closePath();
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawBackground(time) {
  const cameraY = run ? run.y : SURFACE_OFFSET;
  const cameraX = run ? run.x : 0;
  for (let screenX = 0; screenX < width; screenX += 24) {
    const worldX = cameraX + screenX - width / 2 + 12;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, colorAtWorldX(worldX, 0));
    gradient.addColorStop(1, colorAtWorldX(worldX, 1));
    ctx.fillStyle = gradient;
    ctx.fillRect(screenX, 0, 25, height);
  }

  const cx = run ? run.x : 0;
  const cy = cameraY;
  const flowSpacing = 190;
  const firstFlowX = Math.floor((cx - width / 2) / flowSpacing) * flowSpacing - flowSpacing;
  const lastFlowX = cx + width / 2 + flowSpacing;
  const firstFlowY = Math.max(SURFACE_OFFSET, Math.floor((cy - height / 2) / 150) * 150 - 150);
  const lastFlowY = Math.min(BOTTOM_Y, cy + height / 2 + 150);
  for (let worldX = firstFlowX; worldX <= lastFlowX; worldX += flowSpacing) {
    const screenX = worldX - cx + width / 2;
    const level = clamp(Math.floor((worldX - WORLD_MIN_X) / LEVEL_WIDTH), 0, habitatData.length - 1);
    const [currentX, currentY] = habitatData[level].current;
    const strength = Math.hypot(currentX, currentY);
    if (strength < 0.1) continue;
    const angle = Math.atan2(currentY, currentX);
    const dirX = Math.cos(angle);
    const dirY = Math.sin(angle);
    const alpha = 0.045 + Math.min(0.07, strength * 0.035) + Math.sin(time * 2 + worldX) * 0.008;
    for (let worldY = firstFlowY; worldY <= lastFlowY; worldY += 150) {
      const screenY = worldY - cy + height / 2;
      const startY = screenY + Math.sin(time * 0.8 + worldX) * 12;
      ctx.beginPath();
      for (let distance = 0; distance <= 72; distance += 4) {
        const wave = Math.sin(distance / 14 - time * strength * 1.8 + worldX * 0.01 + worldY * 0.015) * 5;
        const pointX = screenX + dirX * distance - dirY * wave;
        const pointY = startY + dirY * distance + dirX * wave;
        if (distance === 0) ctx.moveTo(pointX, pointY);
        else ctx.lineTo(pointX, pointY);
      }
      ctx.strokeStyle = `rgba(211, 239, 228, ${alpha})`;
      ctx.lineWidth = 1.25;
      ctx.lineCap = "round";
      ctx.stroke();
    }
  }

  const surfaceY = SURFACE_OFFSET - cameraY + height / 2;
  if (surfaceY >= 0 && surfaceY <= height) {
    ctx.fillStyle = "rgba(183, 230, 218, .14)";
    ctx.fillRect(0, surfaceY, width, 2);
  }

  const bedY = BOTTOM_Y - cameraY + height / 2;
  if (bedY < height) {
    const visibleBedY = Math.max(-20, bedY);
    const bedGradient = ctx.createLinearGradient(0, visibleBedY, 0, height);
    bedGradient.addColorStop(0, "#4f5948");
    bedGradient.addColorStop(1, "#202f32");
    ctx.beginPath();
    ctx.moveTo(0, visibleBedY);
    for (let x = 0; x <= width + 40; x += 40) {
      const worldX = cx + x - width / 2;
      ctx.lineTo(x, visibleBedY + Math.sin(worldX * .0035) * 4);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = bedGradient;
    ctx.fill();
    drawBedDetails(cx, cy, bedY, time);
  }

  for (let region = 0; region < landscapeFeatures.length; region += 1) {
    const landscape = landscapeFeatures[region];
    const regionLeft = WORLD_MIN_X + region * LEVEL_WIDTH;
    for (const feature of landscape.features) {
      const sx = regionLeft + feature.x - cx + width / 2;
      const sy = SURFACE_OFFSET + feature.depth - cy + height / 2;
      if (sx < -170 || sx > width + 170 || sy < -120 || sy > Math.min(height + 120, bedY + 25)) continue;
      drawLandscapeFeature(landscape.style, landscape.color, sx, sy, feature.size, time);
    }
  }
  for (let region = 0; region < waterObstacles.length; region += 1) {
    const regionLeft = WORLD_MIN_X + region * LEVEL_WIDTH;
    for (const obstacle of waterObstacles[region]) {
      const sx = regionLeft + obstacle.x - cx + width / 2;
      const sy = SURFACE_OFFSET + obstacle.depth - cy + height / 2;
      if (sx < -100 || sx > width + 100 || sy < -100 || sy > height + 100) continue;
      drawWaterObstacle(obstacle, sx, sy, time);
    }
  }

  const drift = (time * 4) % 220;
  for (let i = 0; i < 6; i += 1) {
    const x = (i * 220 - drift + 60) % (width + 220) - 50;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 110, 0);
    ctx.lineTo(x + 245, height * 0.72);
    ctx.lineTo(x + 166, height * 0.72);
    ctx.closePath();
    ctx.fillStyle = `rgba(169, 227, 211, ${0.018 + (i % 3) * 0.006})`;
    ctx.fill();
  }
  const cell = 180;
  const left = Math.floor((cx - width / 2) / cell) - 1;
  const right = Math.floor((cx + width / 2) / cell) + 1;
  const top = Math.floor((cy - height / 2) / cell) - 1;
  const bottom = Math.floor((cy + height / 2) / cell) + 1;
  for (let gx = left; gx <= right; gx += 1) {
    for (let gy = top; gy <= bottom; gy += 1) {
      const seed = hash(gx, gy);
      if (seed < 0.62) continue;
      const sx = gx * cell - cx + width / 2 + seed * cell;
      const sy = gy * cell - cy + height / 2 + hash(gy, gx) * cell;
      const size = 18 + seed * 29;
      if (sx < WORLD_MIN_X - cx + width / 2 || sx > WORLD_MAX_X - cx + width / 2 || sy < -size * 1.2 || sy > Math.min(height + 18, bedY - 6)) continue;
      const plantLevel = clamp(Math.floor((sx + cx - width / 2 - WORLD_MIN_X) / LEVEL_WIDTH), 0, habitatData.length - 1);
      drawSmallPlantStone(sx, sy + 18, plantLevel);
      ctx.strokeStyle = plantLevel < 2
        ? "rgba(202, 157, 111, .2)"
        : plantLevel > 2
          ? "rgba(147, 205, 215, .2)"
          : "rgba(99, 184, 147, .19)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(sx, sy + 18);
      ctx.quadraticCurveTo(sx - size * .4, sy - size * .45, sx - size * .58, sy - size);
      ctx.moveTo(sx, sy + 18);
      ctx.quadraticCurveTo(sx + size * .1, sy - size * .8, sx + size * .18, sy - size * 1.2);
      ctx.stroke();
    }
  }
  if (surfaceY > 0) {
    const skyHeight = Math.min(surfaceY, height);
    const sky = ctx.createLinearGradient(0, 0, 0, Math.max(1, skyHeight));
    const climatePosition = clamp((cameraX - WORLD_MIN_X) / LEVEL_WIDTH - 0.5, 0, habitatData.length - 1);
    const climateLeft = Math.floor(climatePosition);
    const climateRight = Math.min(habitatData.length - 1, climateLeft + 1);
    const climateBlend = climatePosition - climateLeft;
    const skyTop = ["#b98b78", "#b49d85", "#9ac9c2", "#a9c9d1", "#b5c4d2"];
    const skyBottom = ["#e9c59a", "#d8c29e", "#d9e6c6", "#e1e4ce", "#e5e6d7"];
    sky.addColorStop(0, blendHex(skyTop[climateLeft], skyTop[climateRight], climateBlend));
    sky.addColorStop(1, blendHex(skyBottom[climateLeft], skyBottom[climateRight], climateBlend));
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, width, skyHeight);

    const sunX = width * 0.78;
    const sunY = Math.min(skyHeight * 0.32, 100);
    const sunGlow = ctx.createRadialGradient(sunX, sunY, 4, sunX, sunY, Math.max(36, skyHeight * 0.42));
    sunGlow.addColorStop(0, "rgba(255, 244, 194, .48)");
    sunGlow.addColorStop(1, "rgba(255, 242, 199, 0)");
    ctx.fillStyle = sunGlow;
    ctx.fillRect(0, 0, width, skyHeight);
    ctx.fillStyle = "rgba(255, 244, 202, .72)";
    ctx.beginPath();
    ctx.arc(sunX, sunY, 13, 0, Math.PI * 2);
    ctx.fill();

    const cloudDrift = (time * 5) % (width + 220);
    for (let i = 0; i < 3; i += 1) {
      const cloudX = (i * width * 0.42 + cloudDrift) % (width + 220) - 110;
      const cloudY = 24 + i * 31;
      if (cloudY + 26 >= skyHeight - 10) continue;
      ctx.fillStyle = "rgba(246, 246, 222, .22)";
      ctx.beginPath();
      ctx.ellipse(cloudX, cloudY, 38, 9, 0, 0, Math.PI * 2);
      ctx.ellipse(cloudX + 27, cloudY + 2, 24, 7, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    drawSeagulls(skyHeight, time);

    if (surfaceY > 42) {
      const boatX = fisherBoatWorldX(time) - cx + width / 2;
      drawFisherBoat(boatX, surfaceY, time);
    }
    for (let region = 0; region < surfaceLandscapes.length; region += 1) {
      const regionLeft = WORLD_MIN_X + region * LEVEL_WIDTH;
      const landscape = surfaceLandscapes[region];
      const landscapeX = regionLeft + landscape.x - cx + width / 2;
      if (landscapeX < -150 || landscapeX > width + 150) continue;
      drawSurfaceLandscape(landscape, landscapeX, surfaceY, time);
    }

    const lightBand = ctx.createLinearGradient(0, Math.max(0, surfaceY - 8), 0, surfaceY + 32);
    lightBand.addColorStop(0, "rgba(248, 242, 205, .02)");
    lightBand.addColorStop(0.35, "rgba(236, 245, 218, .68)");
    lightBand.addColorStop(0.55, "rgba(151, 226, 209, .42)");
    lightBand.addColorStop(1, "rgba(67, 172, 172, 0)");
    ctx.fillStyle = lightBand;
    ctx.fillRect(0, Math.max(0, surfaceY - 8), width, Math.min(42, height - Math.max(0, surfaceY - 8)));

    ctx.lineWidth = 2;
    for (let row = 0; row < 3; row += 1) {
      ctx.beginPath();
      for (let x = 0; x <= width + 8; x += 8) {
        const y = surfaceY + Math.sin(x * 0.022 + time * 2.4 + row * 1.8) * (2 + row) + row * 3;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = row === 0 ? "rgba(248, 249, 220, .92)" : `rgba(196, 240, 222, ${0.56 - row * 0.12})`;
      ctx.stroke();
    }
  }
  const dayPhase = run ? (gameTime / DAY_LENGTH) % 1 : 0;
  const night = (1 - Math.cos(dayPhase * Math.PI * 2)) / 2;
  const twilight = 1 - Math.abs(night * 2 - 1);
  ctx.fillStyle = `rgba(3, 9, 30, ${0.5 * night})`;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = `rgba(240, 140, 72, ${0.09 * twilight})`;
  ctx.fillRect(0, 0, width, height);
  if (night > 0.35 && surfaceY > -60 && surfaceY < height) {
    ctx.fillStyle = `rgba(236, 240, 255, ${(night - 0.35) * 0.9})`;
    for (let star = 0; star < 28; star += 1) {
      const starX = hash(star, 3) * width;
      const starY = surfaceY - 8 - hash(star, 9) * Math.min(surfaceY, 220);
      if (starY > 0) ctx.fillRect(starX, starY, 1.6, 1.6);
    }
  }
  const vignette = ctx.createRadialGradient(width * .5, height * .48, height * .1, width * .5, height * .48, Math.max(width, height) * .76);
  vignette.addColorStop(0, "rgba(2, 13, 23, 0)");
  vignette.addColorStop(1, "rgba(1, 12, 21, .42)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
}

function drawSignalBody(region, sx, sy, time, target, visibility) {
  const wobble = Math.sin(time * 2.2 + target.phase);
  ctx.save();
  ctx.translate(sx, sy);
  ctx.rotate(wobble * .18);
  if (region === 0) {
    ctx.fillStyle = `rgba(247, 156, 98, ${.8 * visibility})`;
    ctx.beginPath();
    ctx.ellipse(0, 0, 6.5, 4.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = `rgba(255, 205, 140, ${.75 * visibility})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let leg = -1; leg <= 1; leg += 1) {
      ctx.moveTo(leg * 3, 3);
      ctx.lineTo(leg * 5, 8 + wobble * 1.5);
    }
    ctx.moveTo(6, -1);
    ctx.quadraticCurveTo(12, -5, 14, -1);
    ctx.stroke();
  } else if (region === 1) {
    ctx.fillStyle = `rgba(171, 214, 112, ${.78 * visibility})`;
    ctx.beginPath();
    ctx.ellipse(0, 0, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(228, 241, 190, ${.42 * visibility})`;
    ctx.beginPath();
    ctx.ellipse(-3, -5 - wobble, 5, 2.3, -.7, 0, Math.PI * 2);
    ctx.ellipse(3, -5 + wobble, 5, 2.3, .7, 0, Math.PI * 2);
    ctx.fill();
  } else if (region === 3) {
    ctx.fillStyle = `rgba(167, 213, 232, ${.75 * visibility})`;
    for (let segment = 0; segment < 4; segment += 1) {
      ctx.beginPath();
      ctx.arc(-9 + segment * 6, Math.sin(time * 4 + segment + target.phase) * 2.4, 3.6 - segment * .25, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (region === 4) {
    ctx.fillStyle = `rgba(222, 247, 255, ${.8 * visibility})`;
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(6, 0);
    ctx.lineTo(0, 8);
    ctx.lineTo(-6, 0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = `rgba(150, 214, 240, ${.7 * visibility})`;
    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(10, 0);
    ctx.moveTo(0, -11);
    ctx.lineTo(0, 11);
    ctx.stroke();
  } else {
    ctx.fillStyle = `rgba(212, 236, 206, ${.66 * visibility})`;
    ctx.beginPath();
    ctx.ellipse(0, 0, 7, 4.8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-6, 0);
    ctx.lineTo(-12, -4);
    ctx.lineTo(-12, 4);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function drawTarget(target, time) {
  const sx = target.x - run.x + width / 2;
  const sy = target.y - run.y + height / 2;
  const distance = Math.hypot(sx - width / 2, sy - height / 2);
  const visibility = Math.abs(activeHabitat() - 2) * 0.08;
  const habitatVisibility = 1 - visibility;
  const sonarReveal = sonarTimer > 0 && distance < 390;
  const pulse = (time * target.frequency + target.phase) % 1;
  const baseRadius = 8 + pulse * 39;
  const alpha = (1 - pulse) * (sonarReveal ? 0.46 : 0.22) * habitatVisibility;
  ctx.strokeStyle = `rgba(177, 232, 214, ${alpha})`;
  ctx.lineWidth = sonarReveal ? 2 : 1;
  ctx.beginPath();
  ctx.arc(sx, sy, baseRadius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(sx, sy, baseRadius * .58, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(183, 236, 216, ${alpha * .66})`;
  ctx.stroke();
  const region = clamp(Math.floor((target.x - WORLD_MIN_X) / LEVEL_WIDTH), 0, habitatData.length - 1);
  drawSignalBody(region, sx, sy, time, target, habitatVisibility);
  if (sonarReveal) {
    ctx.fillStyle = "rgba(222, 244, 224, .55)";
    ctx.beginPath();
    ctx.arc(sx, sy, 1.2, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawFish(time) {
  const x = width / 2;
  const y = height / 2;
  const bob = Math.sin(time * 2.6) * 2;
  const upgradeCounts = run ? run.upgradeCounts : {};
  const finLevel = (upgradeCounts.fin || 0) + (run ? genes.fins : 0);
  const gutLevel = upgradeCounts.gut || 0;
  const growthLevel = (run ? run.growthLevel : 0) + (upgradeCounts.growth || 0);
  const growthScale = 1 + Math.min(.7, growthLevel * .14);
  const finScale = 1 + Math.min(1.1, finLevel * .3);
  ctx.save();
  ctx.translate(x, y + bob);
  const direction = run ? run.fishDirection : 0;
  const leftFacing = direction >= 3 && direction <= 5;
  const directionAngle = direction * Math.PI / 4;
  ctx.rotate(leftFacing ? directionAngle - Math.PI : directionAngle);
  if (leftFacing) ctx.scale(-1, 1);
  ctx.scale(growthScale, growthScale);
  const finFlick = Math.sin(time * 12) * 2;
  ctx.fillStyle = finLevel ? "#45a991" : "#70cbb4";
  ctx.beginPath();
  ctx.moveTo(-13, 0);
  ctx.lineTo(-27 - (finScale - 1) * 14, -9 * finScale - finFlick);
  ctx.lineTo(-25 - (finScale - 1) * 12, 10 * finScale + finFlick);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = gutLevel ? "#c3e989" : "#8ce0c2";
  ctx.beginPath();
  ctx.ellipse(0, 0, 17, 10 + Math.min(6, gutLevel * 2.5), 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(217, 246, 211, .56)";
  ctx.beginPath();
  ctx.ellipse(2, 4 + gutLevel, 10, 3.5 + Math.min(2.5, gutLevel), 0, 0, Math.PI * 2);
  ctx.fill();
  if (growthLevel > 0) {
    ctx.strokeStyle = "rgba(35, 119, 110, .82)";
    ctx.lineWidth = 2;
    for (let stripe = 0; stripe < Math.min(5, growthLevel + 1); stripe += 1) {
      const stripeX = -10 + stripe * 5;
      ctx.beginPath();
      ctx.moveTo(stripeX, -8);
      ctx.quadraticCurveTo(stripeX + 4, 0, stripeX, 8);
      ctx.stroke();
    }
  }
  if (finLevel > 0) {
    ctx.fillStyle = "rgba(62, 174, 143, .98)";
    ctx.beginPath();
    ctx.moveTo(-7, -7);
    ctx.quadraticCurveTo(-2, -15 - finLevel * 3, 7, -8);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-5, 6);
    ctx.quadraticCurveTo(1, 14 + finLevel * 3, 9, 7);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(208, 255, 218, .85)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-8, -8);
    ctx.lineTo(4, -13 - finLevel * 2);
    ctx.moveTo(-6, 7);
    ctx.lineTo(5, 12 + finLevel * 2);
    ctx.stroke();
  }
  ctx.fillStyle = "#b3e7cb";
  ctx.beginPath();
  ctx.moveTo(-2, -6);
  ctx.lineTo(3, -12);
  ctx.lineTo(9, -5);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#072637";
  ctx.beginPath();
  ctx.arc(9, -2, 1.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const glowRadius = 38 + growthLevel * 8;
  const glow = ctx.createRadialGradient(x, y, 4, x, y, glowRadius);
  glow.addColorStop(0, `rgba(132, 233, 201, ${.15 + Math.min(.14, growthLevel * .025)})`);
  glow.addColorStop(1, "rgba(132, 233, 201, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
  ctx.fill();
}

function drawSonar(time) {
  if (!run || sonarTimer <= 0) return;
  const elapsed = 2.2 - sonarTimer;
  const radius = elapsed / 2.2 * 390;
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(153, 232, 208, ${Math.max(0, sonarTimer / 2.2) * .5})`;
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawScent(time) {
  if (!scentTarget || scentTimer <= 0) return;
  const dx = scentTarget.x - run.x;
  const dy = scentTarget.y - run.y;
  const distance = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx);
  const fade = Math.min(1, scentTimer / 1.5);
  const cx = width / 2;
  const cy = height / 2;
  ctx.save();
  ctx.globalAlpha = fade;
  ctx.strokeStyle = "rgba(244, 214, 128, .95)";
  ctx.fillStyle = "rgba(244, 214, 128, .95)";
  ctx.lineWidth = 2;
  const sx = cx + dx;
  const sy = cy + dy;
  const onScreen = sx > 30 && sx < width - 30 && sy > 30 && sy < height - 30;
  if (onScreen) {
    ctx.beginPath();
    ctx.arc(sx, sy, 20 + Math.sin(time * 5) * 3, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (distance > 70) {
    ctx.translate(cx + Math.cos(angle) * 62, cy + Math.sin(angle) * 62);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(12, 0);
    ctx.lineTo(-6, -8);
    ctx.lineTo(-2, 0);
    ctx.lineTo(-6, 8);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function draw(time) {
  drawBackground(time);
  if (run && state !== "dead") {
    targets.forEach((target) => drawTarget(target, time));
    drawSonar(time);
    drawFish(time);
    drawScent(time);
    drawSplashParticles();
    if (state === "hooked") {
      const pull = run.pullDirection;
      const fishX = width / 2 + pull * 13;
      const fishY = height / 2 - 2;
      const surfaceY = SURFACE_OFFSET - run.y + height / 2;
      const surfaceX = fisherBoatWorldX(time) - run.x + width / 2 - 39;
      ctx.beginPath();
      ctx.moveTo(fishX, fishY);
      ctx.bezierCurveTo(
        fishX + pull * 22, fishY - (fishY - surfaceY) * .28,
        surfaceX - pull * 14, surfaceY + (fishY - surfaceY) * .22,
        surfaceX, surfaceY
      );
      ctx.strokeStyle = "rgba(238, 191, 143, .72)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      if (surfaceY >= -4 && surfaceY <= height + 4) {
        ctx.beginPath();
        ctx.arc(surfaceX, surfaceY, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 221, 166, .92)";
        ctx.fill();
      }
    }
    const hungerDarkness = clamp((20 - run.hunger) / 20, 0, 1) * 0.68;
    if (hungerDarkness > 0) {
      ctx.fillStyle = `rgba(1, 8, 17, ${hungerDarkness})`;
      ctx.fillRect(0, 0, width, height);
    }
  }
}

function frame(now) {
  const dt = Math.min(0.04, (now - lastFrame) / 1000);
  lastFrame = now;
  update(dt);
  draw(now / 1000);
  requestAnimationFrame(frame);
}

function pauseRun() {
  if (state !== "playing") return;
  state = "paused";
  keys.clear();
  showScreen("pauseScreen");
}

function resumeRun() {
  if (state !== "paused") return;
  state = "playing";
  showScreen(null);
}

function returnToMainMenu() {
  if (state !== "paused") return;
  $("statusPop").classList.add("hidden");
  statusTimer = 0;
  statusMessageKey = null;
  run = null;
  state = "menu";
  showScreen("titleScreen");
}

document.addEventListener("keydown", (event) => {
  if (event.target instanceof Element && event.target.closest("select, button, input, textarea, [contenteditable=true]")) return;
  const code = event.code;
  if (code === "KeyE" && !event.repeat) {
    if (state === "playing") pauseRun();
    else if (state === "paused") resumeRun();
    return;
  }
  if (code === "KeyF" && !event.repeat) {
    useScent();
    return;
  }
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(code)) event.preventDefault();
  keys.add(code);
  if (!event.repeat && state === "hooked") handleHookKey(code);
});
document.addEventListener("keyup", (event) => keys.delete(event.code));
window.addEventListener("blur", () => keys.clear());
window.addEventListener("resize", resize);
$("startButton").addEventListener("click", beginRun);
$("geneTreeButton").addEventListener("click", () => {
  refreshGenes();
  showScreen("geneScreen");
});
$("geneTreeBack").addEventListener("click", () => showScreen("titleScreen"));
$("resumeButton").addEventListener("click", resumeRun);
$("mainMenuButton").addEventListener("click", returnToMainMenu);
$("returnButton").addEventListener("click", () => {
  $("statusPop").classList.add("hidden");
  statusTimer = 0;
  run = null;
  state = "menu";
  showScreen("titleScreen");
});
$("languageSelect").addEventListener("change", (event) => changeLanguage(event.target.value));
$("difficultySelect").addEventListener("change", (event) => changeDifficulty(event.target.value));

resize();
applyTranslations();
requestAnimationFrame(frame);
