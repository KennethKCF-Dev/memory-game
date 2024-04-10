export const wordPairs = new Map([
    ["forest", "forêt"],
    ["sibling", "frère et soeur"],
    ["cereal", "céréale"],
    ["desk", "bureau"],
    ["camel", "chameau"],
    ["butter", "beurre"],
    ["bicycle", "vélo"],
    ["railroad", "chemin de fer"],
    ["folder", "dossier"],
    ["weekly", "hebdomadaire"],
    ["hungry", "faim"],
    ["limestone", "calcaire"]
])

export const englishWordList: string[] = Array.from(wordPairs.keys());
export const frenchWordList: string[] = Array.from(wordPairs.values());

