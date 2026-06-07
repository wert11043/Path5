var QUIZ_CONFIG = {
  title: "Path5 病理配合題 — 考試9",
  subtitle: "皮膚・骨骼肌・骨骼・眼耳・軟組織・遺傳症候群 — 選上方分組，再選題型欄位，完成左右配對",
  answerLabel: "疾病 / 診斷",
  mixedGroupLabel: "全部混合",
  defaultGroup: "全部混合",
  defaultField: "gene",
  mixedLimit: 16,
  groupOptions: [
    "全部混合",
    "皮膚腫瘤",
    "慢性發炎皮膚病",
    "水泡病",
    "感染性皮膚病",
    "骨骼肌疾病",
    "先天 & 代謝骨病",
    "骨腫瘤",
    "關節疾病",
    "眼耳疾病",
    "軟組織腫瘤",
    "遺傳症候群"
  ],
  // 全部混合 fallback
  fieldOptions: [
    { key: "gene",      label: "基因 / 抗體" },
    { key: "histology", label: "組織學 / Micro" },
    { key: "clinical",  label: "臨床 / 流行病學" },
    { key: "keypoint",  label: "記憶點 / 考古" }
  ],
  // 各分組對應原始表格欄位
  groupFields: {
    "皮膚腫瘤": [
      { key: "source",     label: "來源 / 特色" },
      { key: "gene",       label: "基因" },
      { key: "micro_clin", label: "關鍵 Micro / 臨床" }
    ],
    "慢性發炎皮膚病": [
      { key: "feature",   label: "6P / 特徵" },
      { key: "location",  label: "部位" },
      { key: "histology", label: "Histology key finding" },
      { key: "koebner",   label: "Koebner" }
    ],
    "水泡病": [
      { key: "split",        label: "裂隙位置" },
      { key: "acantholysis", label: "Acantholysis" },
      { key: "antibody",     label: "抗體" },
      { key: "dif",          label: "DIF pattern" },
      { key: "keypoint",     label: "記憶點" }
    ],
    "感染性皮膚病": [
      { key: "pathogen", label: "病原 / 機制" },
      { key: "micro",    label: "重要 Micro" },
      { key: "keypoint", label: "記憶點" }
    ],
    "骨骼肌疾病": [
      { key: "category",  label: "分類" },
      { key: "gene",      label: "關鍵基因 / 抗體" },
      { key: "histology", label: "Micro 特徵" },
      { key: "clinical",  label: "流行病學 & 症狀" },
      { key: "keypoint",  label: "記憶點" }
    ],
    "先天 & 代謝骨病": [
      { key: "gene",      label: "基因 / 機制" },
      { key: "lab",       label: "Lab" },
      { key: "micro_xray",label: "Micro / X-ray" },
      { key: "keypoint",  label: "記憶點" }
    ],
    "骨腫瘤": [
      { key: "grade",    label: "良 / 惡 / 中" },
      { key: "age",      label: "好發年齡" },
      { key: "location", label: "好發位置" },
      { key: "gene",     label: "基因" },
      { key: "xray",     label: "X-ray" },
      { key: "micro",    label: "Micro key" }
    ],
    "關節疾病": [
      { key: "nature",    label: "本質" },
      { key: "mechanism", label: "機制" },
      { key: "clinical",  label: "好發" },
      { key: "micro",     label: "Micro" },
      { key: "serology",  label: "Serology / 抗體" },
      { key: "keypoint",  label: "記憶點" }
    ],
    "眼耳疾病": [
      { key: "location",  label: "位置 / 流行病學" },
      { key: "mechanism", label: "機制 / 特徵" },
      { key: "keypoint",  label: "記憶點" }
    ],
    "軟組織腫瘤": [
      { key: "source",      label: "來源" },
      { key: "grade",       label: "良 / 惡 / 中" },
      { key: "gene",        label: "基因" },
      { key: "epidemiology",label: "流行病學 / 部位" },
      { key: "histology",   label: "Histology 特徵" },
      { key: "prognosis",   label: "預後" }
    ],
    "遺傳症候群": [
      { key: "gene",       label: "基因" },
      { key: "pathway",    label: "Pathway" },
      { key: "tumor_main", label: "主要腫瘤 / 表現" },
      { key: "keypoint",   label: "記憶點" }
    ]
  }
};

var QUIZ_ROWS = [

  // ════════════════════════════════════════
  //  皮膚腫瘤  表格欄位：腫瘤 | 來源/特色 | 基因 | 關鍵 Micro / 臨床
  // ════════════════════════════════════════
  {
    group: "皮膚腫瘤", answer: "BCC（基底細胞癌）",
    source: "Basal cell",
    gene: "PTCH loss（Hedgehog pathway）",
    micro_clin: "Island of basaloid cells + peripheral palisading + retraction cleft + myxoid stroma；與日照有關；indolent",
    histology: "Island of basaloid cells + peripheral palisading + retraction cleft + myxoid stroma",
    clinical: "最常見皮膚惡性腫瘤；與日照有關；basal cell 來源；indolent",
    keypoint: "Peripheral palisading + retraction cleft = BCC 辨識關鍵"
  },
  {
    group: "皮膚腫瘤", answer: "SCC（鱗狀細胞癌）",
    source: "Keratinocyte",
    gene: "TP53、TERT；HPV（5/8）；砷（arsenic）",
    micro_clin: "Invasive irregular squamous nests 突破 basement membrane；病因：日照/HPV/砷（烏腳病）/burn scar/慢性潰瘍",
    histology: "Invasive irregular squamous nests 突破 basement membrane；variable squamous differentiation + atypia",
    clinical: "第二常見 skin carcinoma；病因：日照、HPV、砷→烏腳病（雲嘉南）、burn scar、慢性潰瘍、XP",
    keypoint: "砷 → SCC + Bowen's disease；Bowen's = SCC in situ（full-thickness atypia）"
  },
  {
    group: "皮膚腫瘤", answer: "Actinic keratosis",
    source: "Keratinocyte（SCC precursor）",
    gene: "TP53（UV mutation）",
    micro_clin: "Basal cell cytologic atypia + solar elastosis + parakeratosis；未突破 basement membrane；SCC precursor",
    histology: "Basal cell cytologic atypia + solar elastosis + parakeratosis；未突破 basement membrane",
    clinical: "SCC precursor；慢性日照；尚未 invasive",
    keypoint: "AK = basal atypia（precursor）；Bowen = full-thickness atypia（in situ）"
  },
  {
    group: "皮膚腫瘤", answer: "Bowen's disease",
    source: "Keratinocyte（SCC in situ）",
    gene: "—（SCC in situ，不論成因）",
    micro_clin: "Full-thickness epidermal atypia（all layers involved）；可由日照/HPV/砷引起",
    histology: "Full-thickness epidermal atypia（all layers involved）",
    clinical: "SCC in situ；可由日照、HPV 或砷引起",
    keypoint: "Full-thickness atypia = in situ；AK = basal layer atypia = precursor"
  },
  {
    group: "皮膚腫瘤", answer: "Melanoma — Acral lentiginous",
    source: "Melanocyte（non-sun exposed）",
    gene: "KIT mutation（non-sun exposed）",
    micro_clin: "台灣最常見 melanoma；亞洲人；手腳末端/指甲縫；Vertical growth phase（dermis nodule）→ 轉移↑",
    histology: "Vertical growth phase（dermis nodule/mitosis）→ 轉移↑；深度從 granular layer 計算",
    clinical: "台灣最常見 melanoma；亞洲人好發；手腳末端、指甲縫；與日照無關",
    keypoint: "台灣最多 = Acral（KIT）；大多數 melanoma de novo（非來自 nevus）"
  },
  {
    group: "皮膚腫瘤", answer: "Melanoma — Superficial spreading",
    source: "Melanocyte（Non-CSD，間歇性日照）",
    gene: "BRAF V600E / NRAS（Non-CSD）",
    micro_clin: "歐美白人最常見；Trunk/extremities；Radial → Vertical growth phase；BRAF V600E target",
    histology: "Radial growth phase → Vertical growth phase（dermis nodule → 轉移↑）",
    clinical: "歐美白人最常見；Trunk / extremities；間歇性日照",
    keypoint: "BRAF/NRAS = Non-CSD；KIT = Acral/mucosal（non-sun exposed）"
  },
  {
    group: "皮膚腫瘤", answer: "Melanoma — Lentigo maligna",
    source: "Melanocyte（CSD，長期日照）",
    gene: "TERT promoter mutation（UV signature，CSD）",
    micro_clin: "老年人；頭頸部；solar elastosis；CSD 長期累積日照 → in situ → invasive",
    histology: "慢性日照損傷；solar elastosis；老年性 in situ → invasive",
    clinical: "老年人；頭頸部；CSD（長期累積日照）",
    keypoint: "TERT = UV signature = CSD；Acral/mucosal = KIT（少 TERT mutation）"
  },
  {
    group: "皮膚腫瘤", answer: "Melanocytic nevus",
    source: "Melanocyte nest（benign）",
    gene: "BRAF / NRAS",
    micro_clin: "Maturation：Junctional（JN）→ Compound → Intradermal；p16/INK4a → senescence 防止惡化",
    histology: "Maturation：JN → Compound → Intradermal；p16/INK4a → senescence",
    clinical: "良性；senescence 機制防止惡化；CDKN2A mutation → Dysplastic nevus syndrome",
    keypoint: "Solar lentigo = linear（non-nested）；Nevus = nested clusters"
  },
  {
    group: "皮膚腫瘤", answer: "Dysplastic nevus",
    source: "Atypical nevus",
    gene: "CDKN2A、BRAF/NRAS",
    micro_clin: "Atypical nevus；irregular architecture + cytologic atypia；Melanoma 高風險",
    histology: "Atypical nevus；irregular architecture + cytologic atypia",
    clinical: "Melanoma 風險↑；syndrome = CDKN2A germline mutation",
    keypoint: "Dysplastic nevus syndrome = CDKN2A mutation；melanoma 高風險"
  },
  {
    group: "皮膚腫瘤", answer: "Solar lentigo（老人斑）",
    source: "Melanocyte（linear，non-nested）",
    gene: "—（日照累積損傷）",
    micro_clin: "Linear non-nested melanocyte hyperplasia in basal layer；rete ridges elongation + thinning；≠ nevus（無 nest）",
    histology: "Linear（non-nested）melanocyte hyperplasia in basal layer；rete ridges elongation + thinning",
    clinical: "老年人；日照誘發；良性",
    keypoint: "Non-nested = solar lentigo；nested = nevus；兩者均非 melanoma"
  },
  {
    group: "皮膚腫瘤", answer: "Seborrheic keratosis",
    source: "Basaloid cells",
    gene: "FGFR3 mutation",
    micro_clin: "Sheets of basaloid cell proliferation；Horn cysts；exophytic；Leser-Trelat sign（突然大量 SK = paraneoplastic）",
    histology: "Sheets of basaloid cell proliferation；horn cysts；exophytic",
    clinical: "良性；老年人好發；突然大量出現 = Leser-Trelat sign（paraneoplastic）",
    keypoint: "Leser-Trelat sign = 突然大量 SK → 提示內臟惡性腫瘤（paraneoplastic）"
  },
  {
    group: "皮膚腫瘤", answer: "Mastocytosis",
    source: "Mast cell",
    gene: "KIT activation（gain-of-function）",
    micro_clin: "Darier's sign（拍打→風疹塊）；Urticaria pigmentosa 最常見；Toluidine blue / Giemsa → metachromatic granules",
    histology: "Mast cell 增生（mild → sheet-like）；Toluidine blue / Giemsa → metachromasia",
    clinical: "Darier's sign（拍打→風疹塊）；Urticaria pigmentosa 最常見",
    keypoint: "Darier's sign；Toluidine blue / Giemsa → metachromatic granules"
  },
  {
    group: "皮膚腫瘤", answer: "Mycosis fungoides（MF）",
    source: "CD4+ T cell（epidermotropic）",
    gene: "—（CD4+ T cell lymphoma；epidermotropic）",
    micro_clin: "最常見 primary skin lymphoma；Pautrier microabscesses；Band-like（lichenoid）T cell infiltration；patch→plaque→tumor",
    histology: "Epidermotropism + Pautrier microabscesses；Band-like（lichenoid）T cell infiltration",
    clinical: "最常見 primary skin lymphoma；patch → plaque → tumor progression；CD4+",
    keypoint: "最常見 primary skin lymphoma = MF；Pautrier microabscesses"
  },
  {
    group: "皮膚腫瘤", answer: "DFSP（隆突性皮膚纖維肉瘤）",
    source: "Fibroblast",
    gene: "t(17;22) COL1A1-PDGFB fusion → PDGFR activation",
    micro_clin: "Storiform pattern + honeycomb subcutaneous fat invasion；最常見 primary skin sarcoma；易 recur 極少 metastasize",
    histology: "Storiform pattern + honeycomb subcutaneous fat invasion",
    clinical: "最常見 primary skin sarcoma；intermediate grade；locally aggressive；易 recur，極少 metastasize",
    keypoint: "DFSP = COL1A1-PDGFB；Dermatofibroma = benign（無基因標誌，dimple sign）"
  },
  {
    group: "皮膚腫瘤", answer: "Dermatofibroma",
    source: "Fibroblast（benign）",
    gene: "—",
    micro_clin: "Dimple sign（lateral pressure → depression）；最常見 benign dermis tumor；下肢好發",
    histology: "良性 dermis 纖維增生；dimple sign（lateral pressure → skin depression）",
    clinical: "最常見 benign dermis tumor；下肢好發",
    keypoint: "Dimple sign；良性；vs DFSP = malignant potential + COL1A1-PDGFB"
  },
  {
    group: "皮膚腫瘤", answer: "Merkel cell carcinoma",
    source: "Merkel cell（neuroendocrine）",
    gene: "Merkel cell polyomavirus（MCV）",
    micro_clin: "Small blue neuroendocrine cells；CK20(+) perinuclear dot；免疫抑制者風險↑；台灣少西方多",
    histology: "Small blue neuroendocrine cells；CK20(+) perinuclear dot；neuroendocrine marker(+)",
    clinical: "免疫抑制者風險↑；老年；UV 暴露；台灣少，西方多",
    keypoint: "Neuroendocrine；MCV 相關；免疫抑制者高風險"
  },

  // ════════════════════════════════════════
  //  慢性發炎皮膚病  欄位：疾病 | 6P/特徵 | 部位 | Histology key | Koebner
  // ════════════════════════════════════════
  {
    group: "慢性發炎皮膚病", answer: "Psoriasis（乾癬）",
    feature: "紅斑銀白鱗屑；Auspitz sign（剝鱗→微出血）",
    location: "Extensor（肘、膝）；scalp",
    histology: "Psoriasiform hyperplasia；Munro's microabscess（角質層 neutrophil）；parakeratosis；hypogranulosis；suprapapillary plate thinning",
    koebner: "✓",
    gene: "T cell 媒介；HLA-Cw6 相關；TNF-α / IL-17 pathway",
    clinical: "紅斑銀白鱗屑；Extensor（肘、膝）；scalp；Koebner(+)",
    keypoint: "Koebner(+)；Auspitz sign（剝鱗→微出血）；Munro's microabscess；Extensor"
  },
  {
    group: "慢性發炎皮膚病", answer: "Lichen planus（扁平苔癬）",
    feature: "6P：Pruritic Purple Polygonal Planar Papules Plaques；Wickham striae",
    location: "Flexor surface；口腔黏膜",
    histology: "Lichenoid band-like interface dermatitis；saw-toothing acanthosis；hypergranulosis；orthokeratosis",
    koebner: "✓",
    gene: "CD8+ cytotoxic T cell 攻擊基底層",
    clinical: "6P；Wickham striae；Flexor surface；oral mucosa；Koebner(+)",
    keypoint: "6P + Wickham striae；Flexor（vs Psoriasis = Extensor）；Koebner(+)；hypergranulosis"
  },
  {
    group: "慢性發炎皮膚病", answer: "Erythema multiforme",
    feature: "Target lesion（靶形病灶）",
    location: "全身分布",
    histology: "Interface dermatitis（basal vacuolization + dyskeratosis）；CD8+ T cells 攻擊 keratinocyte",
    koebner: "✗",
    gene: "CD8+ cytotoxic T cells；HSV / drug 誘發",
    clinical: "Target lesion（靶形病灶）；全身分布；Koebner(−)",
    keypoint: "Target lesion；Koebner(−)（vs Psoriasis/LP = Koebner(+)）"
  },
  {
    group: "慢性發炎皮膚病", answer: "Eczema / Contact dermatitis",
    feature: "急性：vesicles、oozing；慢性：lichenification",
    location: "接觸 / 過敏部位",
    histology: "Acute = Spongiosis（★核心）+ intraepidermal vesicle；Chronic = Acanthosis↑ + hyperkeratosis；biopsy 只能判分期不能判原因",
    koebner: "✗",
    gene: "Type IV hypersensitivity（T cell-mediated）",
    clinical: "急性：vesicles、oozing；慢性：lichenification；接觸 / 過敏部位；Koebner(−)",
    keypoint: "Spongiosis = acute eczema 核心；biopsy 不能判原因（只能判分期）"
  },

  // ════════════════════════════════════════
  //  水泡病  欄位：疾病 | 裂隙位置 | Acantholysis | 抗體 | DIF | 記憶點
  // ════════════════════════════════════════
  {
    group: "水泡病", answer: "Pemphigus vulgaris",
    split: "Suprabasal split",
    acantholysis: "✓",
    antibody: "IgG vs DSG3（desmoglein 3）",
    dif: "Net-like intercellular（所有表皮層間）",
    gene: "IgG vs DSG3（desmoglein 3）→ suprabasal acantholysis",
    histology: "裂隙：Suprabasal split；tombstone row（基底細胞仍附著 dermis）；DIF：net-like intercellular",
    clinical: "皮膚 + 口腔黏膜；中老年；水泡薄易破；acantholysis(+)",
    keypoint: "DSG3 → suprabasal；tombstone row；口腔侵犯；DIF net-like intercellular"
  },
  {
    group: "水泡病", answer: "Pemphigus foliaceus",
    split: "Subcorneal / near granular layer",
    acantholysis: "✓",
    antibody: "IgG vs DSG1（desmoglein 1）",
    dif: "Net-like superficial",
    gene: "IgG vs DSG1（desmoglein 1）→ subcorneal acantholysis",
    histology: "裂隙：Subcorneal / near granular layer；DIF：net-like（superficial）；acantholysis(+)",
    clinical: "水泡薄易破；無 mucosal 侵犯（DSG3 仍保留）",
    keypoint: "DSG1 → subcorneal；無黏膜；同 Impetigo 裂隙但成因不同（autoimmune vs toxin）"
  },
  {
    group: "水泡病", answer: "Bullous pemphigoid",
    split: "Subepidermal split",
    acantholysis: "✗",
    antibody: "IgG vs BPAG1/2（hemidesmosome BP180 / BP230）",
    dif: "Linear（basement membrane zone）",
    gene: "IgG vs BPAG1/2（hemidesmosome BP180 / BP230）",
    histology: "裂隙：Subepidermal split；eosinophils↑；大水泡不易破；DIF：linear（basement membrane）",
    clinical: "最常見水泡病；老人（elderly）；大水泡；acantholysis(−)",
    keypoint: "最常見；subepidermal；linear DIF（BMZ）；eosinophils↑；大水泡不易破"
  },
  {
    group: "水泡病", answer: "Dermatitis herpetiformis",
    split: "Subepidermal",
    acantholysis: "✗",
    antibody: "IgA vs reticulin（anti-tissue transglutaminase）",
    dif: "Granular IgA in dermal papillae tips",
    gene: "IgA vs reticulin（anti-tissue transglutaminase）",
    histology: "裂隙：Subepidermal；Neutrophil microabscesses at tips of dermal papillae；DIF：granular IgA；acantholysis(−)",
    clinical: "Celiac disease（gluten-sensitive）相關；extensor surface；劇癢；acantholysis(−)",
    keypoint: "IgA granular（dermal papillae tips）= DH；celiac disease 相關；neutrophilic microabscesses"
  },
  {
    group: "水泡病", answer: "Epidermolysis bullosa（EB）",
    split: "Subepidermal",
    acantholysis: "✗",
    antibody: "—（遺傳性 structural protein defects）",
    dif: "—（非自體免疫，DIF 陰性）",
    gene: "遺傳性 structural protein defects（keratin / laminin / type VII collagen，依亞型）",
    histology: "裂隙：Subepidermal；acantholysis(−)；DIF(−)；依缺損蛋白不同亞型",
    clinical: "先天性遺傳；非自體免疫；輕微外傷即起泡",
    keypoint: "遺傳性（非自體免疫）；DIF(−)；依缺損蛋白分型"
  },
  {
    group: "水泡病", answer: "Impetigo",
    split: "Subcorneal pustule",
    acantholysis: "✗",
    antibody: "—（S. aureus exfoliative toxin 裂解 DSG1，非自體免疫）",
    dif: "DIF(−)；bacteria culture(+)",
    gene: "S. aureus exfoliative toxin 裂解 DSG1（外源性）",
    histology: "裂隙：Subcorneal pustule；neutrophil 聚集；DIF(−)；culture(+)；acantholysis(−)",
    clinical: "細菌感染；好發臉部、手部；小兒多見",
    keypoint: "裂隙同 PF（subcorneal + DSG1）但成因不同：PF = autoimmune DIF(+)；Impetigo = 毒素 DIF(−) culture(+)"
  },

  // ════════════════════════════════════════
  //  感染性皮膚病  欄位：疾病 | 病原/機制 | 重要 Micro | 記憶點
  // ════════════════════════════════════════
  {
    group: "感染性皮膚病", answer: "Warts（疣）",
    pathogen: "HPV（型別依好發部位而異；16/18 = high-risk）",
    micro: "Koilocytosis：cytoplasmic vacuolization + perinuclear halo（HPV cytopathic effect）；verrucous / papillomatous 增生",
    gene: "HPV（型別依好發部位而異）",
    histology: "Koilocytosis：cytoplasmic vacuolization + perinuclear halo（HPV cytopathic effect）；verrucous / papillomatous 增生",
    clinical: "良性；自限性；HPV 16/18 = high-risk（anogenital）",
    keypoint: "Koilocytosis = HPV 感染標誌"
  },
  {
    group: "感染性皮膚病", answer: "Molluscum contagiosum",
    pathogen: "Poxvirus（Molluscum contagiosum virus）",
    micro: "Molluscum body（Henderson-Patterson body）：keratinocyte 內大型均質 cytoplasmic inclusion；核被推至旁側；cuplike verrucous 增生",
    gene: "Poxvirus（Molluscum contagiosum virus）",
    histology: "Molluscum body（Henderson-Patterson body）：stratum granulosum/corneum keratinocyte 內大型均質 cytoplasmic inclusion；核被推至旁側",
    clinical: "自限性；免疫不全者病灶多；臍凹狀丘疹",
    keypoint: "Molluscum body = 大型 cytoplasmic inclusion（非核內）；核被擠至旁側"
  },
  {
    group: "感染性皮膚病", answer: "Superficial fungal infection",
    pathogen: "Dermatophytes（Microsporum / Epidermophyton / Trichophyton）；Tinea versicolor = Malassezia furfur",
    micro: "Hyphae in stratum corneum（特殊染色）；intraepidermal neutrophils；mild eczematous dermatitis；侷限 stratum corneum 不入 dermis",
    gene: "Dermatophytes（Microsporum / Epidermophyton / Trichophyton）；Tinea versicolor = Malassezia furfur",
    histology: "Mild eczematous dermatitis + intraepidermal neutrophils；特殊染色見 hyphae in stratum corneum",
    clinical: "侷限於 stratum corneum / 指甲，不進入 dermis；依部位命名（tinea capitis / corporis / pedis）",
    keypoint: "侷限 stratum corneum（不進 dermis）；hyphae 需特殊染色"
  },
  {
    group: "感染性皮膚病", answer: "Erythema nodosum（結節性紅斑）",
    pathogen: "延遲性過敏（感染 / 藥物 / sarcoidosis 誘發）",
    micro: "Septal panniculitis（脂肪小葉間隔的發炎）；無 vasculitis",
    gene: "—（延遲性過敏；感染 / 藥物 / sarcoidosis 誘發）",
    histology: "Septal panniculitis（脂肪小葉間隔的發炎）；無 vasculitis",
    clinical: "最常見 panniculitis；好發小腿前側；紅、痛、自癒（自限性）",
    keypoint: "最常見 panniculitis；Septal（間隔性）panniculitis；無 vasculitis"
  },

  // ════════════════════════════════════════
  //  骨骼肌疾病  欄位：分類 | 疾病 | 關鍵基因/抗體 | Micro 特徵 | 流行病學 & 症狀 | 記憶點
  // ════════════════════════════════════════
  {
    group: "骨骼肌疾病", answer: "DMD（Duchenne MD）",
    category: "Muscular dystrophy",
    gene: "Dystrophin（Xp21）X-linked recessive；complete absence of dystrophin（IHC 消失）",
    histology: "Dystrophin IHC 完全消失；fiber size variation + rounding；central nuclei；epimysial fibrosis + fatty replacement；fiber splitting",
    clinical: "男孩；X-linked；30歲前死亡（心肺衰竭）；Becker MD = 第二常見，truncated dystrophin，較晚發病",
    keypoint: "DMD = complete absence；Becker = truncated（功能部分保留）"
  },
  {
    group: "骨骼肌疾病", answer: "Dermatomyositis（DM）",
    category: "Inflammatory myopathy",
    gene: "DMSAs：Anti-TIF1-γ（癌症相關）；Anti-Mi2；Anti-MDA5（ILD 為主）；Anti-NXP-2（兒童、calcinosis）",
    histology: "Perifascicular atrophy；MAC 沉積於 capillary beds（非 myocytes！）；Type I IFN pathway 活化",
    clinical: "Heliotrope rash（眼瞼紫紅）；Gottron rash（指關節背側）；Anti-synthetase syndrome（aSS）= ILD + 肌肉 + 關節",
    keypoint: "MAC 沉積 = capillary beds（非 myocytes）— 考古陷阱；aSS = 抗 ARS Ab（Anti-Jo1）"
  },
  {
    group: "骨骼肌疾病", answer: "IBM（Inclusion Body Myositis）",
    category: "Inflammatory myopathy",
    gene: "TDP-43（cytoplasmic aggregation）；CD8+ T cells；sarcolemma MHC class I↑；VCP mutation",
    histology: "Rimmed vacuoles + Congo-red(+) amyloid；CD8+ T cells endomysial infiltration",
    clinical: ">65y；最常見 elderly inflammatory myopathy；先影響 distal muscle；steroid 無效",
    keypoint: "Rimmed vacuoles = IBM（≠ PM）；steroid 無效；>65y；distal muscle 先萎縮"
  },
  {
    group: "骨骼肌疾病", answer: "IMNM（免疫性壞死性肌病）",
    category: "Inflammatory myopathy",
    gene: "Anti-HMG-CoA reductase（statin 相關）；Anti-SRP（較重，心臟侵犯 + dysphagia）",
    histology: "Prominent myofiber necrosis + macrophage phagocytosis；paucity of inflammatory infiltrate（與 DM/PM 不同）",
    clinical: "排除性診斷；steroid 有效（vs IBM 無效）；anti-SRP 預後較差",
    keypoint: "Paucity of inflammatory infiltrate（與 DM/PM 不同）；steroid 有效"
  },
  {
    group: "骨骼肌疾病", answer: "Polymyositis（PM）",
    category: "Inflammatory myopathy",
    gene: "—（CD8+ T cells 直接攻擊 myocyte；MHC class I↑）",
    histology: "CD8+ T cells endomysial infiltration；MHC class I↑ on sarcolemma",
    clinical: "排除性診斷（排除 IBM / DM / IMNM）；近端肌無力",
    keypoint: "PM = 排除性診斷；無 rimmed vacuoles（IBM）；無 perifascicular atrophy（DM）"
  },
  {
    group: "骨骼肌疾病", answer: "MG（Myasthenia gravis）",
    category: "NMJ disease",
    gene: "Anti-AChR Ab（postsynaptic NMJ）",
    histology: "Postsynaptic membrane 損傷；receptor 降解 + complement fixation",
    clinical: "波動性、無痛性；活動後惡化；10% thymoma；30% thymic hyperplasia（年輕病人）",
    keypoint: "Postsynaptic；重複刺激→力量遞減；10% thymoma；vs LEMS = presynaptic + 重複刺激改善"
  },
  {
    group: "骨骼肌疾病", answer: "LEMS（Lambert-Eaton）",
    category: "NMJ disease",
    gene: "Anti-VGCC Ab（presynaptic Ca²⁺ channel）",
    histology: "Presynaptic Ca²⁺ channel 受阻 → ACh release↓",
    clinical: "四肢無力；重複刺激→力量短暫增加（Lambert's sign）；50% 合併 small cell lung carcinoma",
    keypoint: "Presynaptic；重複刺激→改善；50% SCLC；vs MG = postsynaptic + 重複刺激惡化"
  },
  {
    group: "骨骼肌疾病", answer: "Mitochondrial myopathy",
    category: "Mitochondrial myopathy",
    gene: "mtDNA / nuclear gene mutation",
    histology: "Ragged red fibers（Gomori trichrome）；SDH sublaminar accumulation；COX activity↓",
    clinical: "多系統受影響（眼外肌、心臟、CNS）",
    keypoint: "Ragged red fibers = Gomori trichrome（非 NADH！）；NADH 看 target fiber / core"
  },
  {
    group: "骨骼肌疾病", answer: "Core myopathy",
    category: "Congenital myopathy",
    gene: "RYR1（ryanodine receptor）；Autosomal dominant",
    histology: "NADH-TR：central core 淡染（myofibrillar disruption）；EM：Z-band 消失",
    clinical: "先天性；近端肌無力；malignant hyperthermia 風險↑（RYR1）",
    keypoint: "NADH-TR → central core 淡染；RYR1 = malignant hyperthermia 相關"
  },
  {
    group: "骨骼肌疾病", answer: "Nemaline myopathy",
    category: "Congenital myopathy",
    gene: "ACTA1（skeletal muscle α-actin）mutation",
    histology: "Gomori trichrome：cytoplasmic rod inclusions；EM：nemaline rods（Z-band 衍生物）",
    clinical: "先天性；近端肌無力；新生兒型可致命",
    keypoint: "Nemaline rods = Z-band 衍生；Gomori trichrome 可見"
  },
  {
    group: "骨骼肌疾病", answer: "Neurogenic atrophy（SMA / ALS）",
    category: "Neurogenic atrophy",
    gene: "SMA = SMN1；ALS = SOD1 / TDP-43 等",
    histology: "Angular fiber（denervation）；Fiber type grouping（reinnervation）；Group atrophy（reinnervating neuron 死亡 → 整批萎縮）",
    clinical: "SMA = 小孩；ALS = 成人（上下運動神經元共同受損）；最終 fibrosis",
    keypoint: "Angular fiber → Denervation；Fiber type grouping → Reinnervation；Group atrophy → 最終 fibrosis"
  },
  {
    group: "骨骼肌疾病", answer: "CFTD（先天性纖維比例失調）",
    category: "Congenital myopathy",
    gene: "—",
    histology: "ATPase：Type I fiber atrophy（Type I 比 Type II 小 >35%）",
    clinical: "先天性；近端肌無力",
    keypoint: "Type I atrophy（vs 老化 = Type II atrophy）"
  },
  {
    group: "骨骼肌疾病", answer: "Centronuclear myopathy（肌小管肌病）",
    category: "Congenital myopathy",
    gene: "DNM2（dynamin 2）；X-linked 型 = MTM1",
    histology: "Central nuclei（核不移到周邊，維持在中央）；= myotubular myopathy",
    clinical: "先天性；肌無力；與 DMD 區別：dystrophin 正常",
    keypoint: "Central nuclei（正常 <3%，此病 >> 3%）；= myotubular myopathy"
  },

  // ════════════════════════════════════════
  //  先天 & 代謝骨病  欄位：疾病 | 基因/機制 | Lab | Micro/X-ray | 記憶點
  // ════════════════════════════════════════
  {
    group: "先天 & 代謝骨病", answer: "Achondroplasia（軟骨發育不全）",
    gene: "FGFR3 gain-of-function（AD）→ 過度抑制 chondrocyte 增殖 → endochondral ossification↓",
    lab: "—",
    micro_xray: "Growth plate 不足；proximal limb short（rhizomelic dwarfism）；大頭",
    histology: "Growth plate 不足；proximal limb short（rhizomelic dwarfism）",
    clinical: "最常見侏儒症；大頭、短肢；智力正常；顱底窄",
    keypoint: "FGFR3 gain-of-function（AD）= 最常見侏儒症"
  },
  {
    group: "先天 & 代謝骨病", answer: "Osteogenesis Imperfecta（OI）",
    gene: "COL1A1 / COL1A2（AD）；Type I collagen 質/量不足；dominant negative effect",
    lab: "—",
    micro_xray: "Type I collagen 異常 → 骨脆；多發骨折；Blue sclera；dentinogenesis imperfecta",
    histology: "Type I collagen 異常 → 骨脆；多發骨折；薄弱結締組織",
    clinical: "Blue sclera；brittle bones；hearing loss；dental imperfection（dentinogenesis imperfecta）",
    keypoint: "Blue sclera + brittle bones = OI；COL1A1/COL1A2 dominant negative"
  },
  {
    group: "先天 & 代謝骨病", answer: "Osteopetrosis（骨石症）",
    gene: "CLCN7（AD）；TCIRG1（AR）；CA2（AR + renal tubular acidosis）；RANKL mutation（AR，osteoclast-poor）；IKBKG/NEMO（AR + ectodermal dysplasia）",
    lab: "—",
    micro_xray: "Erlenmeyer flask deformity（X-ray）；marble bone；骨髓腔消失 → pancytopenia；HSCT 治療",
    histology: "Osteoclast dysfunction → woven bone 無法 remodel；Erlenmeyer flask deformity；marble bone",
    clinical: "骨髓腔消失 → pancytopenia；HSCT 治療（osteoclast 為骨髓來源）",
    keypoint: "HSCT 治療；Erlenmeyer flask；RANKL mutation = osteoclast-poor；CA2 mutation = renal tubular acidosis；IKBKG/NEMO = ectodermal dysplasia + osteopetrosis"
  },
  {
    group: "先天 & 代謝骨病", answer: "Osteoporosis（骨質疏鬆）",
    gene: "Estrogen↓ → RANKL↑、OPG↓ → osteoclast↑；mineralization 正常",
    lab: "—（mineralization 正常；Ca/P 正常）",
    micro_xray: "Thin trabeculae；cortical thinning；compression fracture；mineralization 正常（vs Osteomalacia = mineralization↓）",
    histology: "Thin trabeculae；cortical thinning；mineralization 正常（vs Osteomalacia = mineralization↓）",
    clinical: "停經後最常見代謝骨病；compression fracture；bisphosphonate / denosumab 治療",
    keypoint: "Mineralization 正常 = Osteoporosis；mineralization↓ = Osteomalacia；兩者均 bone mass↓"
  },
  {
    group: "先天 & 代謝骨病", answer: "Rickets / Osteomalacia",
    gene: "Vit D↓ → Ca/P↓ → mineralization↓ → osteoid↑（未礦化骨基質堆積）",
    lab: "Ca/P↓；PTH↑",
    micro_xray: "Growth plate 變寬（Rickets = 小孩）；osteoid↑；Rickets（小孩）vs Osteomalacia（成人）",
    histology: "Growth plate 變寬（Rickets = 小孩）；osteoid↑；Lab：Ca/P↓，PTH↑",
    clinical: "Rickets = 小孩（growth plate open）；Osteomalacia = 成人；膝外翻 / 內翻",
    keypoint: "Ca/P↓ + osteoid↑；mineralization↓；Rickets（小孩）vs Osteomalacia（成人）"
  },
  {
    group: "先天 & 代謝骨病", answer: "Hyperparathyroidism（骨病變）",
    gene: "PTH↑ → RANKL↑ → osteoclast↑ → bone resorption↑",
    lab: "Ca↑；PTH↑",
    micro_xray: "Brown tumor（fracture → 出血 → fibrosis）；Osteitis fibrosa cystica；dissecting osteitis",
    histology: "Brown tumor（fracture → 出血 → fibrosis）；Osteitis fibrosa cystica；dissecting osteitis",
    clinical: "Von Recklinghausen disease of bone；polyuria、kidney stones（高鈣血症症狀）",
    keypoint: "Brown tumor = 出血後 fibrosis（非真正腫瘤）；Osteitis fibrosa cystica"
  },
  {
    group: "先天 & 代謝骨病", answer: "Paget disease（骨 Paget 病）",
    gene: "SQSTM1（50% familial）；osteoclast overactivation → osteoblast → disordered bone mass",
    lab: "ALP↑↑；Ca/P 正常",
    micro_xray: "超大 osteoclasts（>12 nuclei）+ swallowtail pattern；晚期：Mosaic / jigsaw pattern（cement lines）；picture-frame vertebra；blade of grass",
    histology: "早期：超大 osteoclasts（>12 nuclei）+ swallowtail pattern；晚期 burnt-out：Mosaic / jigsaw pattern（cement lines）",
    clinical: "ALP↑↑（Ca/P 正常）；骨骼痛；high-output heart failure；<1% → osteosarcoma（polyostotic = 5-10%）",
    keypoint: "ALP↑↑ + Ca/P 正常 = Paget；超大 osteoclasts（>12 nuclei）；Mosaic pattern（晚期）"
  },
  {
    group: "先天 & 代謝骨病", answer: "Osteomyelitis（骨髓炎）",
    gene: "S. aureus（最常見；血行感染）；Salmonella（Sickle cell 病人）；Pseudomonas（靜脈注射毒品者）；凝固酶陰性葡球菌（假體感染）",
    lab: "WBC↑；CRP↑；ESR↑；Blood culture；Bone scan / MRI 最敏感（早期診斷）",
    micro_xray: "Sequestrum（死骨 = devitalized avascular bone）+ Involucrum（新骨 = periosteal new bone）；Cloaca（慢性排膿孔）",
    histology: "急性：neutrophil infiltration；慢性：Sequestrum（死骨）+ Involucrum（periosteal 新骨）+ Brodie's abscess",
    clinical: "小孩：長骨 metaphysis（血流豐富）；成人：椎體 spondylodiscitis；Sickle cell → Salmonella 特殊",
    keypoint: "Sequestrum = 死骨；Involucrum = 新骨；S. aureus 最常見；Salmonella + Sickle cell；MRI 最敏感"
  },

  // ════════════════════════════════════════
  //  骨腫瘤  欄位：腫瘤 | 良/惡/中 | 好發年齡 | 好發位置 | 基因 | X-ray | Micro key
  // ════════════════════════════════════════
  {
    group: "骨腫瘤", answer: "Osteoid osteoma",
    grade: "良",
    age: "<30y（10-20y 多）",
    location: "Long bone cortex（femur / tibia）；偶脊椎橫突",
    gene: "—",
    xray: "Intracortical nidus <2cm + dense sclerotic rim；reactive periosteal thickening",
    micro: "Nidus = woven bone + rimming osteoblasts + richly vascular fibrous stroma",
    histology: "Nidus（<2cm）= woven bone + osteoblast rimming + vascular fibrous stroma；reactive sclerosis 圍繞",
    clinical: "良性；<30y；Long bone cortex；Night pain（夜間疼痛）+ aspirin 緩解（PGE2↑）；RFA = 治療首選",
    keypoint: "Night pain + aspirin relief = Osteoid osteoma；Nidus <2cm；vs Osteoblastoma = >2cm + aspirin 無效"
  },
  {
    group: "骨腫瘤", answer: "Osteoblastoma",
    grade: "中（locally aggressive）",
    age: "10-30y",
    location: "Posterior elements of vertebra（最常）；long bone diaphysis",
    gene: "—",
    xray: "Lytic lesion ≥2cm；± expansion；posterior vertebral elements；無 sclerosis",
    micro: "Osteoblast-rimmed woven bone trabeculae（組織學同 osteoid osteoma 但 ≥2cm）；vascular fibrous stroma",
    histology: "Osteoblast-rimmed woven bone（組織學同 osteoid osteoma）；≥2cm；脊椎椎後元素好發；無 sclerosis",
    clinical: "中等；10-30y；脊椎椎後元素最常；aspirin 無效；≥2cm；手術切除",
    keypoint: "≥2cm + 脊椎椎後元素 + aspirin 無效 = Osteoblastoma；vs Osteoid osteoma = <2cm + Night pain + aspirin 有效"
  },
  {
    group: "骨腫瘤", answer: "Osteosarcoma",
    grade: "惡",
    age: "<20y（第一高峰）；50-60y（繼發，Paget 等）",
    location: "Long bone metaphysis（50% 膝蓋周圍）",
    gene: "p53 / Rb（70% sporadic）；MDM2/CDK4（low-grade）",
    xray: "Codman's triangle（periosteal reaction）；lytic + blastic",
    micro: "Malignant osteoid（lace-like，腫瘤細胞產生）；chemo 有效",
    histology: "Malignant osteoid（lace-like，腫瘤細胞產生）；Codman's triangle；lytic + blastic",
    clinical: "惡性；1st peak <20y；Long bone metaphysis（50% 膝蓋周圍）；chemo 有效",
    keypoint: "Metaphysis（vs Ewing = diaphysis）；Codman's triangle；chemo 有效（vs Chondrosarcoma 無效）"
  },
  {
    group: "骨腫瘤", answer: "Chondrosarcoma",
    grade: "惡",
    age: "40y+；男",
    location: "Axial skeleton（pelvis、ribs）",
    gene: "Central（from enchondroma）= IDH1/IDH2；Peripheral（from osteochondroma）= EXT1/EXT2",
    xray: "Ring and arc calcification（flocculent densities）；cortex breakthrough（high-grade）",
    micro: "Infiltrative border + host bone entrapment；hypercellular；myxoid stroma；chemo 無效",
    histology: "Infiltrative border + host bone entrapment；hypercellular nodules；myxoid stroma；cytologic atypia",
    clinical: "惡性；40y+；Axial skeleton（pelvis、ribs）；chemo 無效，直接手術",
    keypoint: "Chemo 無效（vs OS 有效）；Central = IDH；Peripheral = EXT；40y+；axial"
  },
  {
    group: "骨腫瘤", answer: "Mesenchymal chondrosarcoma",
    grade: "惡（高惡性）",
    age: "10-30y（最年輕的 chondrosarcoma）",
    location: "Jaw / ribs / extraskeletal（骨外也可見）",
    gene: "HEY1-NCOA2 fusion（highly specific）",
    xray: "Bimorphic：calcified cartilage 小島 + lytic soft tissue；小灶軟骨夾雜 small cells",
    micro: "Bimorphic：small round cells（hemangiopericytoma-like staghorn vessels）+ well-differentiated hyaline cartilage islands",
    histology: "Bimorphic（小圓細胞 + 分化良好軟骨島）；HEY1-NCOA2；可延遲遠端轉移（delayed metastasis）",
    clinical: "惡性；10-30y；Jaw / extraskeletal；可 chemo（含 small round cell 成分）；可延遲轉移",
    keypoint: "Bimorphic（small round cells + cartilage islands）；HEY1-NCOA2；最年輕 chondrosarcoma；可 chemo（vs conventional = 無效）"
  },
  {
    group: "骨腫瘤", answer: "Clear cell chondrosarcoma",
    grade: "惡（低惡性度）",
    age: "20-40y",
    location: "Epiphysis of long bones（proximal femur / humerus）；罕見位置",
    gene: "IDH2（多數）",
    xray: "Well-defined lucent lesion in epiphysis；± calcification；良性外觀",
    micro: "Clear cytoplasm chondrocytes（glycogen-rich）+ osteoclast-type giant cells + reactive woven bone trabeculae",
    histology: "Clear cytoplasm chondrocytes（glycogen↑）；osteoclast-type giant cells；reactive woven bone；low-grade but malignant",
    clinical: "惡性低惡性度；Epiphysis（rare 位置）；外觀像良性但會轉移；手術完整切除",
    keypoint: "Clear cytoplasm = Clear cell chondrosarcoma；Epiphysis（极罕見）；IDH2；low-grade 但仍惡性"
  },
  {
    group: "骨腫瘤", answer: "Dedifferentiated chondrosarcoma",
    grade: "惡（最高惡性度）",
    age: "50y+（老年）",
    location: "Long bone / axial skeleton（同 conventional）",
    gene: "IDH1/IDH2（低惡性成分）；高惡性成分 = complex karyotype",
    xray: "Bimorphic：低惡性軟骨鈣化區 + 高惡性溶骨區（abrupt demarcation）",
    micro: "Abrupt demarcation（無過渡區）= 診斷關鍵；Low-grade cartilage（conventional）→ abrupt → High-grade sarcoma（OS/UPS/fibrosarcoma）",
    histology: "Low-grade cartilage + abrupt transition to high-grade sarcoma（無過渡區）；bimorphic 型態",
    clinical: "最差預後的 chondrosarcoma；50y+；chemo 效果差；aggressive",
    keypoint: "Abrupt demarcation（無過渡區）= Dedifferentiated；最差預後 chondrosarcoma；常在 conventional 基礎上惡化"
  },
  {
    group: "骨腫瘤", answer: "Ewing sarcoma",
    grade: "惡",
    age: "<20y",
    location: "Long bone diaphysis；pelvis",
    gene: "t(11;22) EWS-FLI1 fusion（EWSR1-FLI1）",
    xray: "Onion-skin periosteal reaction",
    micro: "Small blue round cells；Homer-Wright rosettes（偶見）",
    histology: "Small blue round cells；Homer-Wright rosettes（偶見）；Onion-skin periosteal reaction（X-ray）",
    clinical: "惡性；<20y；Long bone diaphysis；pelvis；chemo 有效",
    keypoint: "Diaphysis（vs OS = metaphysis）；onion-skin X-ray；t(11;22)；<20y"
  },
  {
    group: "骨腫瘤", answer: "GCT（Giant cell tumor）",
    grade: "中（locally aggressive）",
    age: "30-50y",
    location: "Epiphysis（distal femur / proximal tibia）",
    gene: "H3.3 G34W mutation；RANKL 高表現（recruit osteoclast-type giant cells）",
    xray: "Soap bubble；epiphysis",
    micro: "Osteoclast-type giant cells（非 tumor cells！）+ mononuclear osteoblastic precursor；frequent necrosis + mitosis",
    histology: "Osteoclast-type giant cells（非 tumor cells！）+ mononuclear osteoblastic precursor；frequent necrosis + mitosis；Soap bubble（X-ray）",
    clinical: "中等（locally aggressive）；30-50y；Epiphysis（distal femur / proximal tibia）；Denosumab 治療",
    keypoint: "Giant cells = osteoclast-type（RANKL 招募），非 tumor cells；Epiphysis（vs ABC = metaphysis）"
  },
  {
    group: "骨腫瘤", answer: "Fibrous dysplasia",
    grade: "良",
    age: "Adolescence",
    location: "Femur、rib、skull",
    gene: "GNAS1 somatic mosaic（同 McCune-Albright）",
    xray: "Ground-glass opacity",
    micro: "Fibroblast-like cells + curvilinear woven bone；無 osteoblastic rimming（重要！）",
    histology: "Fibroblast-like cells + curvilinear woven bone；無 osteoblastic rimming（重要！）；ground-glass X-ray",
    clinical: "良性；Adolescence；femur、rib、skull；polyostotic → McCune-Albright syndrome",
    keypoint: "無 osteoblastic rimming；GNAS1 somatic = 同 McCune-Albright；ground-glass X-ray"
  },
  {
    group: "骨腫瘤", answer: "ABC（Aneurysmal Bone Cyst）",
    grade: "良",
    age: "Adolescence",
    location: "Femur、tibia、vertebra（Metaphysis / diaphysis）",
    gene: "USP6 rearrangement（70%）",
    xray: "Expansile；eggshell；air-fluid level",
    micro: "Blood-filled cysts；plump spindle cells + osteoclast-type giant cells；blue bone（1/3）",
    histology: "Blood-filled cysts；plump spindle cells + osteoclast-type giant cells；reactive woven bone lined by osteoblasts；blue bone（1/3 = calcified basophilic matrix）",
    clinical: "良性；Adolescence；femur、tibia、vertebra",
    keypoint: "Blood-filled cysts；blue bone；Metaphysis/diaphysis（vs GCT = Epiphysis）"
  },
  {
    group: "骨腫瘤", answer: "Non-ossifying fibroma（NOF）",
    grade: "良（self-limiting）",
    age: "<20y（兒童青少年）",
    location: "Distal femur / tibia metaphysis（eccentric cortical）",
    gene: "—",
    xray: "Eccentric geographic lucency + sclerotic rim（metaphysis cortex）；lobulated；自行消退",
    micro: "Storiform spindle cells + foamy histiocytes（xanthoma cells）+ osteoclast-type giant cells + hemosiderin；無 osteoid",
    histology: "Storiform spindle cells + foamy histiocytes（xanthoma cells）+ osteoclast-type giant cells + hemosiderin；無 osteoid",
    clinical: "良性；<20y；distal femur / tibia；大多 asymptomatic；可自行消退；偶因骨折被發現",
    keypoint: "Storiform + foamy histiocytes（xanthoma cells）+ giant cells + hemosiderin；無 osteoid；<20y；distal femur metaphysis"
  },
  {
    group: "骨腫瘤", answer: "Osteochondroma",
    grade: "良",
    age: "青少年",
    location: "Long bone metaphysis（near growth plate）",
    gene: "EXT1 / EXT2（hereditary = HME）",
    xray: "Bony stalk + cartilage cap；medullary cavity 連通 host bone",
    micro: "Medullary cavity 連通 = osteochondroma 診斷關鍵",
    histology: "Bony stalk + cartilage cap；medullary cavity 連通 host bone（X-ray）",
    clinical: "良性；最常見 bone tumor（overall）；青少年；Long bone metaphysis near growth plate",
    keypoint: "Medullary cavity 連通 = osteochondroma（鑑別關鍵）"
  },
  {
    group: "骨腫瘤", answer: "Enchondroma",
    grade: "良",
    age: "20-50y",
    location: "Medullary cavity（short / long bone）；手指多",
    gene: "IDH1 / IDH2（somatic mosaic）",
    xray: "Lobulated calcification",
    micro: "Well-circumscribed lobulated nodules；benign hyaline chondrocytes；±endochondral ossification / calcification",
    histology: "Well-circumscribed lobulated nodules；benign hyaline chondrocytes；±endochondral ossification / calcification；lobulated calcification（X-ray）",
    clinical: "良性；20-50y；Medullary cavity（short / long bone）；可惡化為 central chondrosarcoma",
    keypoint: "IDH1/2 = enchondroma & central chondrosarcoma；short tubular bone（手指）好發"
  },

  // ════════════════════════════════════════
  //  關節疾病  欄位：疾病 | 本質 | 機制 | 好發 | Micro | Serology | 記憶點
  // ════════════════════════════════════════
  {
    group: "關節疾病", answer: "OA（Osteoarthritis）",
    nature: "退化性（非發炎）",
    mechanism: "Cartilage wear → chondrocyte apoptosis → matrix degradation",
    micro: "Fissures；loose bodies（cartilage 碎片游離）；osteophytes（骨刺）；bone eburnation；subchondral cysts",
    serology: "—",
    gene: "—（退化性；chondrocyte apoptosis；cartilage wear）",
    histology: "Fissures；loose bodies（cartilage 碎片游離）；osteophytes（骨刺）；bone eburnation；subchondral cysts",
    clinical: "老年（>60y）；weight-bearing joints（knee、hip）；非發炎；X-ray：joint space↓ + osteophytes",
    keypoint: "退化性（非發炎）；osteophytes；loose bodies；vs RA = 自體免疫 + pannus"
  },
  {
    group: "關節疾病", answer: "RA（Rheumatoid arthritis）",
    nature: "自體免疫（發炎）",
    mechanism: "CD4+ T（Th1/Th17）→ pannus；RF；ACPA；HLA-DR4",
    micro: "Pannus（synovium + inflammatory cells 侵蝕軟骨）；lymphoid follicles；Rheumatoid nodules（fibrinoid necrosis）",
    serology: "ACPA（70%）；RF（80%）；HLA-DR4",
    gene: "ACPA（70%）、RF（80%）；HLA-DR4；CD4+ T（Th1/Th17）",
    histology: "Pannus（synovium + inflammatory cells 侵蝕軟骨）；lymphoid follicles；Rheumatoid nodules（fibrinoid necrosis）",
    clinical: "20-40y；女性多；small joints（手指→手腕→全身）；morning stiffness >1hr；X-ray：joint erosion",
    keypoint: "ACPA + RF + HLA-DR4；pannus；small joints（vs OA = weight-bearing）"
  },
  {
    group: "關節疾病", answer: "Gout（痛風）",
    nature: "Urate crystal 沉積",
    mechanism: "Uric acid↑ → monosodium urate crystals → macrophage → neutrophil → 急性發炎",
    micro: "Negatively birefringent needle-shaped crystals（黃棕色）；固定需 absolute alcohol（formalin 溶解 urate）",
    serology: "Hyperuricemia（necessary not sufficient；只有 10% hyperuricemia → gout）",
    gene: "Uric acid↑ → monosodium urate crystals；HGPRT deficiency（Lesch-Nyhan）",
    histology: "Negatively birefringent needle-shaped crystals（黃棕色）；固定需 absolute alcohol（formalin 溶解 urate）",
    clinical: "中老年男性；metatarsal（腳大拇指）；purine 飲食；Tophus；punched-out lesion（X-ray）",
    keypoint: "固定 = absolute alcohol（非 formalin！）；hyperuricemia → gout 只有 10%（necessary not sufficient）"
  },
  {
    group: "關節疾病", answer: "CPPD（Pseudogout）",
    nature: "Calcium pyrophosphate crystal 沉積",
    mechanism: "ANKH germline gain-of-function → 胞外 pyrophosphate↑；或 sporadic / secondary",
    micro: "Rhomboid crystals；blue-purple aggregates；0.5-5 µm；birefringent；inflammation milder than gout",
    serology: "—（Sporadic 最常見；AD 遺傳型 = ANKH mutation）",
    gene: "Sporadic 最常見；ANKH germline gain-of-function（AD 遺傳型）→ 胞外 pyrophosphate↑",
    histology: "Rhomboid crystals；blue-purple aggregates；0.5-5 µm；birefringent；inflammation milder than gout",
    clinical: "50y+；no sex/race difference；knee 最常見；chondrocalcinosis（X-ray）",
    keypoint: "菱形（rhomboid）藍紫色 = CPPD；針狀（needle）黃棕色 = Gout"
  },
  {
    group: "關節疾病", answer: "Lesch-Nyhan syndrome",
    nature: "X-linked HGPRT deficiency（完全）→ secondary gout",
    mechanism: "完全 HGPRT deficiency（X-linked recessive）→ uric acid↑ → secondary gout + neurologic symptoms",
    micro: "Urate crystal deposition；secondary gout",
    serology: "—（X-linked recessive）",
    gene: "完全 HGPRT deficiency（X-linked recessive）→ uric acid↑（secondary gout）",
    histology: "Urate crystal deposition；secondary gout",
    clinical: "Secondary gout + neurologic symptoms + self-mutilation（自傷行為）",
    keypoint: "完全 HGPRT = secondary gout + 神經症狀；Partial HGPRT = primary gout（只有關節）"
  },
  {
    group: "關節疾病", answer: "Tenosynovial GCT（PVNS / localized）",
    nature: "良性腫瘤（局部型 or 瀰漫型/PVNS）",
    mechanism: "CSF1 overexpression（t(1;2) CSF1-COL6A3 fusion）→ monocyte/macrophage/osteoclast 招募",
    clinical: "局部型：手指腱鞘（最常）；瀰漫型 / PVNS：大關節（膝）；局部型可完全切除；瀰漫型 recur 率高",
    micro: "Bland mononuclear synoviocyte-like cells + histiocyte-like cells + multinucleated osteoclast-type giant cells + hemosiderin（rust-brown color）",
    serology: "—（CSF1 / CSF1R IHC 支持性）",
    gene: "CSF1 overexpression（t(1;2) CSF1-COL6A3 fusion）；局部型可完全切除；瀰漫型 = PVNS",
    histology: "Bland mononuclear cells + osteoclast-type giant cells + hemosiderin；局部型（finger）vs 瀰漫型（knee/PVNS）",
    keypoint: "CSF1（t(1;2)）= monocyte-osteoclast 招募；局部型（finger）vs 瀰漫型 PVNS（knee）；hemosiderin = rust-brown"
  },
  {
    group: "關節疾病", answer: "Ganglion cyst（腱鞘囊腫）",
    nature: "假性囊腫（無上皮或滑膜層）",
    mechanism: "腱鞘或關節囊黏液樣退化（非滑液漏出）；壁為纖維結締組織，無上皮 / 滑膜",
    clinical: "手腕背側最常見；多無症狀；可自行消退；可穿刺或手術",
    micro: "纖維結締組織囊壁（無上皮層）；mucinous 黏液樣內容物；無炎症細胞",
    serology: "—",
    gene: "—（退化性；非腫瘤）",
    histology: "纖維結締組織囊壁（無上皮層）；mucinous 內容物",
    keypoint: "無上皮層（假性囊腫）；手腕背側最常見；mucinous 內容物；vs Baker cyst = 有滑膜層 + 膝窩"
  },
  {
    group: "關節疾病", answer: "Synovial cyst（Baker cyst）",
    nature: "真性滑膜囊腫（囊壁有滑膜細胞層）",
    mechanism: "膝關節後方壓力↑（OA / RA）→ 滑液向後膨出至腓腸肌-半膜肌滑囊（popliteal bursa）",
    clinical: "膝窩（popliteal fossa）；常合併 OA 或 RA；可破裂 → 急性小腿腫痛（類 DVT！）",
    micro: "囊壁有滑膜細胞層（真性囊腫）；± 慢性發炎細胞",
    serology: "—（超音波 / MRI 診斷）",
    gene: "—（繼發於 OA / RA；非腫瘤）",
    histology: "囊壁有滑膜細胞層（真性囊腫）；± 慢性發炎細胞",
    keypoint: "膝窩 popliteal fossa；有滑膜層（真性囊腫）；合併 OA/RA；破裂 = 類 DVT（小腿急腫）"
  },

  // ════════════════════════════════════════
  //  眼耳疾病  欄位：疾病 | 位置/流行病學 | 機制/特徵 | 記憶點
  // ════════════════════════════════════════
  {
    group: "眼耳疾病", answer: "Uveal melanoma",
    location: "Uvea（最常見原發性眼內腫瘤）；血行轉移 → 肝（tumor-specific tropism）",
    mechanism: "GNAQ / GNA11（非 BRAF！）；Loss of Ch3；BAP1 mutation；lateral extent = 預後因子（非 depth）",
    keypoint: "GNAQ/GNA11（非 BRAF）= Uveal；BRAF V600E = Conjunctival；lateral extent = 預後；5-year survival 80%",
    gene: "GNAQ / GNA11（非 BRAF！）；Loss of Ch3；BAP1 mutation",
    histology: "Epithelioid cells（預後差）vs spindle cells（預後好）；lateral extent（非 depth）為預後因子",
    clinical: "最常見原發性眼內腫瘤；血行轉移→肝（tumor-specific tropism）；UV 關聯性低"
  },
  {
    group: "眼耳疾病", answer: "Conjunctival melanoma",
    location: "Conjunctiva（多起源 limbus）；中年",
    mechanism: "BRAF V600E（40%）；可來自 PAM（primary acquired melanosis）with atypia；sentinel node（parotid/submandibular）biopsy",
    keypoint: "BRAF V600E = Conjunctival（vs Uveal = GNAQ/GNA11）；25% 最終致死",
    gene: "BRAF V600E（40%）",
    histology: "多起源 limbus；可來自 PAM（primary acquired melanosis）with atypia",
    clinical: "中年；25% 最終致死；sentinel node（parotid/submandibular）biopsy"
  },
  {
    group: "眼耳疾病", answer: "Retinoblastoma",
    location: "Retina；小孩最常見 intraocular malignant tumor",
    mechanism: "RB germline mutation（13q14）two-hit hypothesis；Flexner-Wintersteiner rosettes；leukocoria（白瞳孔）",
    keypoint: "Flexner-Wintersteiner rosettes；leukocoria = 白瞳孔；RB gene two-hit",
    gene: "RB germline mutation（13q14）；two-hit hypothesis",
    histology: "Flexner-Wintersteiner rosettes（真正管狀結構，圍繞中央空腔）；small blue cells",
    clinical: "小孩最常見 intraocular malignant tumor；leukocoria（白瞳孔）；strabismus"
  },
  {
    group: "眼耳疾病", answer: "BCC（Eyelid）",
    location: "Eyelid（最常見 eyelid malignancy）；lower eyelid / medial canthus",
    mechanism: "PTCH loss（Hedgehog）；basaloid island + peripheral palisading；與日照有關；indolent；90%+ 三年治癒",
    keypoint: "最常見 eyelid malignancy = BCC；lower eyelid / medial canthus",
    gene: "PTCH loss（Hedgehog pathway）",
    histology: "Basaloid island + peripheral palisading；lower eyelid / medial canthus 好發",
    clinical: "最常見 eyelid malignancy；與日照有關；indolent；90%+ 三年內治癒"
  },
  {
    group: "眼耳疾病", answer: "Sebaceous carcinoma（Eyelid）",
    location: "Eyelid（upper, meibomian gland 好發）",
    mechanism: "Pagetoid spread into conjunctiva；lobular sebaceous architecture；長得像 chalazion 易誤診；與 Muir-Torre 較無關",
    keypoint: "Eyelid sebaceous carcinoma 與 Muir-Torre 較無關（其他部位 sebaceous tumor 才相關）",
    gene: "—（與 Muir-Torre 較無關！）",
    histology: "Pagetoid spread into conjunctiva；lobular sebaceous architecture；長得像 chalazion 易誤診",
    clinical: "Upper eyelid meibomian gland 好發；侵襲性高；易誤診為 chalazion"
  },
  {
    group: "眼耳疾病", answer: "Pterygium（翼狀贅肉）",
    location: "Cornea（侵入 beyond limbus）；日照相關",
    mechanism: "Fibrovascular connective tissue 鑽入 Bowman layer（cornea）；solar elastosis；會延伸超過 pupillary axis",
    keypoint: "Pterygium 超過 pupillary axis（侵 cornea）；Pinguecula 不會（止於 limbus 旁）",
    gene: "—（日照 actinic damage）",
    histology: "Fibrovascular connective tissue 鑽入 Bowman layer（cornea）；solar elastosis",
    clinical: "會延伸超過 pupillary axis（侵入 cornea）；日照相關"
  },
  {
    group: "眼耳疾病", answer: "Pinguecula（眼瞼裂斑）",
    location: "Conjunctiva（止於 limbus，不過 pupillary axis）；日照相關",
    mechanism: "Solar elastosis（stroma degeneration）；submucosal elevation；不侵入 cornea；無需治療",
    keypoint: "止於 limbus（不過 pupillary axis）；成因組織學同 Pterygium，但不侵 cornea",
    gene: "—（日照 actinic damage）",
    histology: "Solar elastosis（stroma degeneration）；submucosal elevation on conjunctiva",
    clinical: "不超過 pupillary axis；日照相關；無需治療"
  },
  {
    group: "眼耳疾病", answer: "Paraganglioma（中耳）",
    location: "Middle ear（neuroendocrine tumor）；SDH germline mutation（<30y 需懷疑）",
    mechanism: "Chief cells；傳導性聽力缺損；50% local recurrence；組織學外觀 benign → 一律視為 malignancy",
    keypoint: "外觀 benign，但一律視為 malignancy；50% local recurrence；SDH mutation",
    gene: "Germline SDH（A/B/C/D/AF2）mutation；<30y 發病需懷疑 germline",
    histology: "Middle ear neuroendocrine tumor（chief cells）；組織學外觀 benign",
    clinical: "傳導性聽力缺損；50% local recurrence；一律視為 malignancy"
  },
  {
    group: "眼耳疾病", answer: "Otosclerosis（耳硬化症）",
    location: "Stapes footplate（inner ear）；AD，variable penetrance；familial 通常雙側",
    mechanism: "Stapes footplate 異常骨化 → fixation to oval window → gradual conductive hearing loss；stapedectomy 可改善",
    keypoint: "Stapes footplate 骨化；gradual onset；AD variable penetrance",
    gene: "AD，variable penetrance（親代無症狀→子代可發病）；familial 通常雙側",
    histology: "Stapes footplate 處異常骨化 → fixation to oval window",
    clinical: "Gradual conductive hearing loss；年輕/中年；stapedectomy 可改善"
  },
  {
    group: "眼耳疾病", answer: "Cholesteatoma（膽酯瘤）",
    location: "Middle ear（COM 後繼發）；非腫瘤性；俗稱珍珠耳",
    mechanism: "COM → 耳膜破裂 → squamous epithelium ingrowth → keratin-filled cyst；progressive bone erosion",
    keypoint: "Non-neoplastic；繼發自 COM；骨頭侵蝕；珍珠耳",
    gene: "—（COM 後繼發；非腫瘤性）",
    histology: "Squamous epithelium ingrowth → keratin-filled cyst；bone erosion；non-neoplastic",
    clinical: "COM → 耳膜破裂 → squamous epithelium ingrowth；progressive bone erosion；俗稱珍珠耳"
  },
  {
    group: "眼耳疾病", answer: "Open-angle glaucoma",
    location: "Trabecular meshwork（流出阻力↑）；最常見 glaucoma 類型",
    mechanism: "房水可進入 trabecular meshwork，但流出阻力↑ → IOP↑；根本原因 unknown（B11重要）；緩慢視野缺損",
    keypoint: "最常見；根本原因 unknown；vs Angle-closure = 物理性阻礙（周邊虹膜黏附）",
    gene: "—（流出阻力↑的根本原因 unknown，B11重要）",
    histology: "房水可進入 trabecular meshwork，但流出阻力↑ → IOP↑；optic nerve damage",
    clinical: "最常見 glaucoma 類型；緩慢進展；視野缺損（周邊先）"
  },
  {
    group: "眼耳疾病", answer: "Angle-closure glaucoma",
    location: "前房（周邊虹膜黏附 trabecular meshwork）；淺前房；遠視者",
    mechanism: "物理性阻礙 trabecular meshwork；iris bombé；急性發作（紅眼/劇痛/頭痛/噁心）",
    keypoint: "物理性阻礙（vs Open-angle = 流出阻力↑原因 unknown）；iris bombé；急性",
    gene: "—（淺前房解剖結構；遠視為危險因子）",
    histology: "周邊虹膜黏附 trabecular meshwork → 物理性阻礙；iris bombé",
    clinical: "急性發作（紅眼、劇痛、頭痛、噁心）；淺前房；遠視者易發"
  },
  {
    group: "眼耳疾病", answer: "Graves' ophthalmopathy",
    location: "Orbit（錐內）；axial proptosis；自體免疫相關",
    mechanism: "眼外肌 ECM 堆積 → muscle belly 纖維化（tendon 正常！）；治療甲狀腺後 proptosis 不一定改善",
    keypoint: "Tendon 不受影響（muscle belly 纖維化）；治療甲狀腺後 proptosis 不一定改善",
    gene: "自體免疫（TSH receptor Ab 等）→ 眼外肌 ECM 堆積",
    histology: "眼外肌 muscle belly 纖維化；tendon 不受影響（重要！）",
    clinical: "Axial proptosis；凸眼程度與甲狀腺功能無直接相關；治療甲狀腺後 proptosis 不一定改善"
  },

  // ════════════════════════════════════════
  //  軟組織腫瘤  欄位：腫瘤 | 來源 | 良/惡/中 | 基因 | 流行病學/部位 | Histology | 預後
  // ════════════════════════════════════════
  {
    group: "軟組織腫瘤", answer: "WD Liposarcoma / ALT",
    source: "脂肪",
    grade: "惡（retroperitoneum）/ 中（extremity = ALT）",
    gene: "MDM2 + CDK4 amplification（12q13-15）",
    epidemiology: "40-60y；retroperitoneum / thigh",
    histology: "Atypical spindle cells in fibrous septa；散在 lipoblasts",
    prognosis: "Retroperitoneum 預後差；extremity（切乾淨）= ALT；LPS 四型預後最佳",
    clinical: "惡性（retroperitoneum）/ 中等（extremity = ALT）；40-60y；復發但少轉移",
    keypoint: "Retroperitoneum = malignant；Extremity（切乾淨）= ALT；MDM2 amplification"
  },
  {
    group: "軟組織腫瘤", answer: "Myxoid liposarcoma",
    source: "脂肪",
    grade: "中",
    gene: "t(12;16) FUS-DDIT3",
    epidemiology: "30-40y；thigh（非 retroperitoneum）",
    histology: "Chicken-wire capillary + lipoblasts；uniform cytology（monomorphic）",
    prognosis: "LPS 中等預後；thigh（非 retroperitoneum）",
    clinical: "中等；30-40y；thigh（非 retroperitoneum）",
    keypoint: "Chicken-wire capillary；thigh（非 retroperitoneum）；FUS-DDIT3；中等預後"
  },
  {
    group: "軟組織腫瘤", answer: "Pleomorphic liposarcoma",
    source: "脂肪",
    grade: "惡",
    gene: "Complex karyotype（non-specific）",
    epidemiology: "中老年；thigh（很少長 retroperitoneum）",
    histology: "Pleomorphic lipoblasts（large；ugly nuclei；single / multi-vacuolated cytoplasm）",
    prognosis: "LPS 四型預後最差；aggressive 易轉移",
    clinical: "惡性；中老年；thigh（很少長 retroperitoneum）；四型 LPS 中預後最差",
    keypoint: "LPS 四型預後：WD 最好 > Myxoid > Dedifferentiated > Pleomorphic 最差"
  },
  {
    group: "軟組織腫瘤", answer: "Nodular fasciitis",
    source: "Myofibroblast",
    grade: "良（pseudosarcoma）",
    gene: "MYH9-USP6 fusion（t(17;22)，與 DFSP 染色體相同但不同 gene）",
    epidemiology: "Young adult；upper extremity subcutis；25% trauma history",
    histology: "Tissue culture-like pattern；stellate/bipolar cells + collagen",
    prognosis: "Self-limited（spontaneously regressing）；不需手術；易誤診為惡性 → 過度切除",
    clinical: "良性；Young adult；upper extremity subcutis；self-limited（spontaneously regressing）；易誤診為惡性",
    keypoint: "Self-limited；不需手術；易誤診為惡性 → 過度切除"
  },
  {
    group: "軟組織腫瘤", answer: "Deep fibromatosis（Desmoid tumor）",
    source: "Fibroblast（scar-like）",
    grade: "中（locally aggressive）",
    gene: "APC or β-catenin（CTNNB1）mutation → Wnt signaling；Gardner syndrome（FAP variant）",
    epidemiology: "Teenagers–young adults；extremity / abdominal wall（孕婦）/ mesentery",
    histology: "Bland spindle cells without atypia；abundant collagen；infiltrates muscle",
    prognosis: "不轉移；locally aggressive；切除有刺激生長作用→觀察為主",
    clinical: "中等（locally aggressive）；不轉移；切除有刺激生長作用→觀察為主；abdominal wall / mesentery",
    keypoint: "Locally aggressive 但不轉移；切除有刺激生長→觀察；Gardner syndrome（APC）"
  },
  {
    group: "軟組織腫瘤", answer: "SFT（Solitary fibrous tumor）",
    source: "Fibroblast",
    grade: "良～惡（risk 分群）",
    gene: "NAB2-STAT6 fusion（highly specific）→ IHC：STAT6 nucleus(+)",
    epidemiology: "中年人；pleura 最常（也見 meninges、subcutis）",
    histology: "Staghorn branching vessels（鹿角狀）；spindle cells + collagen；IHC STAT6 nucleus(+)",
    prognosis: "Rare paraneoplastic hypoglycemia（IGF2）；腫瘤切除後低血糖治癒",
    clinical: "Pleura 最常；meninges（舊稱 hemangiopericytoma）；rare paraneoplastic hypoglycemia（IGF2）",
    keypoint: "Staghorn vessels；STAT6 IHC(+)；IGF2 → 低血糖（腫瘤切除後自癒）"
  },
  {
    group: "軟組織腫瘤", answer: "Synovial sarcoma",
    source: "滑膜分化",
    grade: "惡",
    gene: "t(X;18) SS18-SSX fusion（highly specific）",
    epidemiology: "15-40y（young adult）；extremity near joints",
    histology: "Biphasic（epithelioid + spindle cells）；有時 monophasic",
    prognosis: "Young adult；biphasic；t(X;18)",
    clinical: "惡性；15-40y（young adult）；extremity near joints",
    keypoint: "Young adult；biphasic；t(X;18)；near joints"
  },
  {
    group: "軟組織腫瘤", answer: "Embryonal RMS",
    source: "橫紋肌",
    grade: "惡",
    gene: "RAS pathway（heterogeneous）",
    epidemiology: "0-10y；Head & neck / GU tract",
    histology: "Rhabdomyoblasts + striations；myxoid stroma；Botryoid variant = Cambium layer（mucosa-lined hollow organs）",
    prognosis: "最常見 RMS（50%）；預後最好；需手術 + 放療 + chemo",
    clinical: "惡性；0-10y；Head & neck / GU tract；最常見（50%）＋最好預後的 RMS",
    keypoint: "最常見 RMS（50%）；0-10y；H&N/GU；預後最好"
  },
  {
    group: "軟組織腫瘤", answer: "Alveolar RMS",
    source: "橫紋肌",
    grade: "惡",
    gene: "t(2;13) PAX3-FOXO1 or t(1;13) PAX7-FOXO1（PAX3 預後較差）",
    epidemiology: "10-25y（teenagers）；extremity / paranasal sinuses",
    histology: "Small round cells；alveolar pattern；discohesive；IHC：desmin + myogenin（diffuse）",
    prognosis: "例外可淋巴轉移（sarcoma 例外！）；PAX3 預後差於 PAX7",
    clinical: "惡性；10-25y（teenagers）；extremity / paranasal sinuses；可淋巴轉移（sarcoma 例外！）",
    keypoint: "Sarcoma 通常血行轉移；Alveolar RMS 例外（可淋巴轉移）；PAX3 預後較 PAX7 差"
  },
  {
    group: "軟組織腫瘤", answer: "Pleomorphic RMS",
    source: "橫紋肌",
    grade: "惡",
    gene: "Complex karyotype",
    epidemiology: "Older adults；extremity",
    histology: "Pleomorphic cells with eosinophilic cytoplasm；無 striations；需 IHC（desmin/myogenin/myo-D1）確認",
    prognosis: "預後最差 RMS；無 striations；需 IHC 確認",
    clinical: "惡性；Older adults；extremity；預後最差的 RMS",
    keypoint: "最差預後 RMS；無 striations；需 IHC 確認；older adults"
  },
  {
    group: "軟組織腫瘤", answer: "UPS（Undifferentiated Pleomorphic Sarcoma）",
    source: "未知（排除性診斷）",
    grade: "惡",
    gene: "Complex karyotype（non-specific）；舊稱 MFH",
    epidemiology: "中老年；成人最常見 sarcoma 大類；四肢深部 soft tissue",
    histology: "看不出分化方向；pleomorphic；排除性診斷",
    prognosis: "舊稱 MFH；排除性診斷（看不出分化方向）",
    clinical: "惡性；成人最常見 sarcoma 大類；中老年；四肢深部 soft tissue",
    keypoint: "成人最常見 sarcoma = UPS（MFH）；排除性診斷（看不出分化方向）"
  },
  {
    group: "軟組織腫瘤", answer: "Leiomyosarcoma",
    source: "平滑肌",
    grade: "惡",
    gene: "—",
    epidemiology: "成年女性；子宮 / 四肢 / 後腹腔；大血管（IVC）起源者最 aggressive",
    histology: "子宮 LMS：necrosis = 最重要惡性標準；chemo 效果有限",
    prognosis: "子宮 LMS：necrosis = 惡性標準；chemo 效果差",
    clinical: "惡性；成年女性好發；子宮、四肢、後腹腔；大血管（IVC）起源者最 aggressive",
    keypoint: "子宮 LMS：necrosis = 惡性標準；chemo 效果差"
  },
  {
    group: "軟組織腫瘤", answer: "Myxofibrosarcoma（MFS）",
    source: "纖維",
    grade: "惡（較 UPS indolent）",
    gene: "Complex karyotype（non-specific）",
    epidemiology: "Elderly；extremity subcutis",
    histology: "Multinodular myxoid tumor；curvilinear vessels；infiltrative border",
    prognosis: "最常見 superficial sarcoma；curvilinear vessels；比 UPS 較 indolent",
    clinical: "惡性；Elderly；extremity subcutis；最常見 superficial sarcoma；比 UPS 較 indolent",
    keypoint: "最常見 superficial sarcoma；curvilinear vessels；subcutis"
  },
  {
    group: "軟組織腫瘤", answer: "Angiosarcoma / Stewart-Treves",
    source: "血管",
    grade: "惡",
    gene: "—（HHV8 → Kaposi sarcoma；Stewart-Treves = 淋巴水腫後繼發）",
    epidemiology: "Stewart-Treves：乳癌術後 axillary LN 切除 → 長期淋巴水腫 → 上臂",
    histology: "Vascular channel formation；high-grade cytology；高侵襲性",
    prognosis: "高侵襲性；化療效果差；Stewart-Treves = secondary angiosarcoma",
    clinical: "惡性；Stewart-Treves：乳癌術後 axillary LN 切除 → 長期淋巴水腫 → secondary angiosarcoma（上臂）",
    keypoint: "Stewart-Treves = 乳癌術後淋巴水腫 → secondary angiosarcoma；HHV8 → Kaposi sarcoma"
  },

  // ════════════════════════════════════════
  //  遺傳症候群  欄位：Syndrome | 基因 | Pathway | 主要腫瘤/表現 | 記憶點
  // ════════════════════════════════════════
  {
    group: "遺傳症候群", answer: "NF1",
    gene: "NF1（17q11.2）；AD；neurofibromin = RAS GTPase activator",
    pathway: "RAS-MAPK（neurofibromin = RAS GTPase activator）",
    tumor_main: "Neurofibromas（非 schwannoma！）；MPNST（lifetime risk 8-13%）；pilocytic astrocytoma",
    keypoint: "NF1 長 neurofibroma（非 schwannoma）；Schwannomatosis 長 schwannoma（非 neurofibroma）",
    histology: "Neurofibromas（非 schwannoma！）；MPNST（lifetime risk 8-13%）；pilocytic astrocytoma；Lisch nodules（虹膜 hamartoma）",
    clinical: "Café-au-lait spots（>5mm×6+ 小孩；>15mm×6+ 成人）；RAS-MAPK pathway"
  },
  {
    group: "遺傳症候群", answer: "NF2",
    gene: "NF2（22q12）；AD；merlin = tumor suppressor",
    pathway: "RAS-MAPK（merlin = tumor suppressor）",
    tumor_main: "Bilateral vestibular schwannoma（CN8；CV angle）；meningioma；spinal ependymoma",
    keypoint: "Bilateral vestibular schwannoma = NF2 確診；vs Schwannomatosis = spinal/cutaneous（無 bilateral vestibular）",
    histology: "Bilateral vestibular schwannoma（CN8；CV angle）；meningioma；spinal ependymoma",
    clinical: "Bilateral vestibular schwannoma = 確診；聽力缺損"
  },
  {
    group: "遺傳症候群", answer: "Tuberous sclerosis",
    gene: "TSC1 / TSC2；AD；hamartin/tuberin → 抑制 mTOR",
    pathway: "mTOR（hamartin/tuberin 抑制 mTOR）",
    tumor_main: "Cortical tubers；ash-leaf spots（低色素斑）；SEGA（Subependymal giant cell astrocytoma）；AML（kidney）",
    keypoint: "TSC1/2 → mTOR 抑制喪失 → hamartomas；ash-leaf spots；SEGA",
    histology: "Cortical tubers；ash-leaf spots（低色素斑）；SEGA（Subependymal giant cell astrocytoma）；AML（kidney）",
    clinical: "Multiple hamartomas（brain、skin、kidney）；epilepsy；cognitive impairment"
  },
  {
    group: "遺傳症候群", answer: "Schwannomatosis",
    gene: "SMARCB1 / LZTR1（22q11）；Four/Five-hit model（須同時失去 NF2）",
    pathway: "Chromatin remodeling；LZTR1 = cullin-3 ubiquitin ligase → RAS 降解",
    tumor_main: "Multiple schwannomas（spinal/cutaneous/cranial）；meningioma（5%）；無 bilateral vestibular schwannoma",
    keypoint: "Four-hit：germline SMARCB1 → LOH 22q（SMARCB1 + NF2 各喪失 1 allele）→ NF2 somatic → 成瘤",
    histology: "Multiple schwannomas（spinal/cutaneous/cranial）；meningioma（5%）",
    clinical: "無 bilateral vestibular schwannoma（與 NF2 最重要區別）；慢性疼痛"
  },
  {
    group: "遺傳症候群", answer: "McCune-Albright syndrome",
    gene: "GNAS somatic mosaic（postzygotic）；GPCR → cAMP↑；非遺傳",
    pathway: "GPCR → cAMP↑（GNAS somatic mosaic，postzygotic）",
    tumor_main: "Fibrous dysplasia（多發）+ precocious puberty + café-au-lait（海岸線狀邊界）；Triad",
    keypoint: "GNAS somatic mosaic（postzygotic = 非遺傳）；與 fibrous dysplasia 同 GNAS1 somatic",
    histology: "Fibrous dysplasia（多發）；café-au-lait（邊界不規則，海岸線狀）",
    clinical: "Triad：Fibrous dysplasia + Precocious puberty + Café-au-lait；GH excess；hypercortisolism"
  },
  {
    group: "遺傳症候群", answer: "Ollier / Maffucci（Enchondromatosis）",
    gene: "IDH1 / IDH2 somatic mosaic（postzygotic）；D-2-HG oncometabolite；非遺傳",
    pathway: "D-2-HG oncometabolite → DNA/histone hypermethylation（IDH1/2 somatic）",
    tumor_main: "Multiple enchondromas；Maffucci 額外有 spindle cell hemangioma（非 cavernous hemangioma）",
    keypoint: "Not inherited（postzygotic）；Maffucci = spindle cell hemangioma（非 cavernous）；IDH1/2 = 同 glioma/chondrosarcoma",
    histology: "Multiple enchondromas；Maffucci 額外有 spindle cell hemangioma（非 cavernous hemangioma）",
    clinical: "Ollier 較常見；可惡化為 chondrosarcoma；Not inherited（postzygotic）"
  },
  {
    group: "遺傳症候群", answer: "HME（Multiple Osteochondromatosis）",
    gene: "EXT1 / EXT2（AD）；Hedgehog pathway（heparan sulfate）",
    pathway: "Hedgehog（heparan sulfate → pathway transduction）（EXT1/2 AD）",
    tumor_main: "Multiple osteochondromas；可惡化 → peripheral chondrosarcoma",
    keypoint: "EXT1/2（AD）= HME；peripheral chondrosarcoma 的 predisposing mutation",
    histology: "Multiple osteochondromas；growth plate outer column 失去 polarity → exostosis",
    clinical: "青少年；多發骨軟骨瘤；可惡化為 peripheral chondrosarcoma"
  },
  {
    group: "遺傳症候群", answer: "VHL（Von Hippel-Lindau）",
    gene: "VHL（3p25）；AD；pVHL = HIF-α ubiquitin ligase",
    pathway: "HIF pathway（pVHL 失去 → HIF-α 無法降解 → VEGF↑ → 血管新生）",
    tumor_main: "Clear cell RCC（雙側多發；最常見死因）+ Hemangioblastoma（cerebellum / retina）+ Pheochromocytoma + Pancreatic cysts/NETs",
    keypoint: "VHL → HIF↑ → VEGF↑；Clear cell RCC + Hemangioblastoma + Pheochromocytoma = VHL Triad；最常見死因 = RCC",
    histology: "Clear cell RCC（雙側多發）；Hemangioblastoma（cerebellum / retina）；Pheochromocytoma；Pancreatic cysts / NETs",
    clinical: "雙側多發 clear cell RCC；retinal angioma；hemangioblastoma（cerebellum）；pheochromocytoma；pancreatic cysts"
  },
  {
    group: "遺傳症候群", answer: "Gardner syndrome",
    gene: "APC（or β-catenin）；FAP variant；Wnt signaling",
    pathway: "Wnt（APC / β-catenin）",
    tumor_main: "Desmoid tumor（deep fibromatosis）+ colorectal polyp/adenoma + osteomas + epidermoid cysts",
    keypoint: "Gardner = APC；desmoid tumor（deep fibromatosis）+ colorectal polyp",
    histology: "Desmoid tumor（deep fibromatosis）；colorectal polyp/adenoma；osteomas；epidermoid cysts",
    clinical: "APC germline；colorectal polyp + desmoid + osteomas；FAP variant"
  },
  {
    group: "遺傳症候群", answer: "HLRCC",
    gene: "FH（fumarate hydratase）germline mutation；Krebs cycle 缺陷",
    pathway: "Krebs cycle 缺陷（FH = fumarate hydratase）→ fumarate 堆積 → epigenetic dysregulation",
    tumor_main: "Uterine + cutaneous leiomyoma（良性）+ aggressive RCC（papillary type 2）",
    keypoint: "FH mutation → aggressive RCC；leiomyoma 本身良性",
    histology: "Uterine leiomyoma（良性）；cutaneous leiomyoma；aggressive RCC（papillary type 2）",
    clinical: "子宮 + 皮膚多發 leiomyoma + aggressive RCC；Leiomyoma 本身良性，RCC 侵襲性極強"
  }

];
