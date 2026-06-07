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
  fieldOptions: [
    { key: "gene",      label: "基因 / 抗體" },
    { key: "histology", label: "組織學 / Micro / DIF" },
    { key: "clinical",  label: "臨床 / 流行病學" },
    { key: "keypoint",  label: "記憶點 / 考古" }
  ]
};

// ─── 每筆資料依 總整理.md 各表格欄位填入 ───────────────────────────────
// group    = 對應 總整理 的章節 / 表格
// answer   = 腫瘤 / 疾病名（右欄）
// gene     = 基因 / 抗體 / 病原
// histology= 組織學 / Micro / DIF / X-ray
// clinical = 臨床特徵 / 流行病學 / 好發位置
// keypoint = 記憶點 / 考古陷阱 / 鑑別

var QUIZ_ROWS = [

  // ════════════════════════════════════════
  //  皮膚腫瘤  （來自「皮膚腫瘤分類速查」表格）
  // ════════════════════════════════════════
  {
    group: "皮膚腫瘤", answer: "BCC（基底細胞癌）",
    gene: "PTCH loss（Hedgehog pathway）",
    histology: "Island of basaloid cells + peripheral palisading + retraction cleft + myxoid stroma",
    clinical: "最常見皮膚惡性腫瘤；與日照有關；basal cell 來源；indolent",
    keypoint: "Peripheral palisading + retraction cleft = BCC 辨識關鍵"
  },
  {
    group: "皮膚腫瘤", answer: "SCC（鱗狀細胞癌）",
    gene: "TP53、TERT；HPV（5/8）；砷（arsenic）",
    histology: "Invasive irregular squamous nests 突破 basement membrane；variable squamous differentiation + atypia",
    clinical: "第二常見 skin carcinoma；病因：日照、HPV、砷→烏腳病（雲嘉南）、burn scar、慢性潰瘍、XP",
    keypoint: "砷 → SCC + Bowen's disease；Bowen's = SCC in situ（full-thickness atypia）"
  },
  {
    group: "皮膚腫瘤", answer: "Actinic keratosis",
    gene: "TP53（UV mutation）",
    histology: "Basal cell cytologic atypia + solar elastosis + parakeratosis；未突破 basement membrane",
    clinical: "SCC precursor；慢性日照；尚未 invasive",
    keypoint: "AK = basal atypia（precursor）；Bowen = full-thickness atypia（in situ）"
  },
  {
    group: "皮膚腫瘤", answer: "Bowen's disease",
    gene: "—（SCC in situ，不論成因）",
    histology: "Full-thickness epidermal atypia（all layers involved）",
    clinical: "SCC in situ；可由日照、HPV 或砷引起",
    keypoint: "Full-thickness atypia = in situ；AK = basal layer atypia = precursor"
  },
  {
    group: "皮膚腫瘤", answer: "Melanoma — Acral lentiginous",
    gene: "KIT mutation（non-sun exposed）",
    histology: "Vertical growth phase（dermis nodule/mitosis）→ 轉移↑；深度從 granular layer 開始計算",
    clinical: "台灣最常見 melanoma；亞洲人好發；手腳末端、指甲縫；與日照無關",
    keypoint: "台灣最多 = Acral（KIT）；大多數 melanoma de novo（非來自 nevus）"
  },
  {
    group: "皮膚腫瘤", answer: "Melanoma — Superficial spreading",
    gene: "BRAF / NRAS（Non-CSD 間歇性日照）",
    histology: "Radial growth phase → Vertical growth phase（dermis nodule → 轉移↑）",
    clinical: "歐美白人最常見；Trunk / extremities；間歇性日照",
    keypoint: "BRAF/NRAS = Non-CSD；KIT = Acral/mucosal（non-sun exposed）"
  },
  {
    group: "皮膚腫瘤", answer: "Melanoma — Lentigo maligna",
    gene: "TERT promoter mutation（UV signature，長期日照 CSD）",
    histology: "慢性日照損傷；solar elastosis；老年性 in situ → invasive",
    clinical: "老年人；頭頸部；CSD（長期累積日照）",
    keypoint: "TERT = UV signature = CSD；Acral/mucosal = KIT（少見 TERT mutation）"
  },
  {
    group: "皮膚腫瘤", answer: "Melanocytic nevus",
    gene: "BRAF / NRAS",
    histology: "Maturation：Junctional（JN）→ Compound → Intradermal；nest 形成；p16/INK4a → senescence",
    clinical: "良性；senescence 機制防止惡化；CDKN2A mutation → Dysplastic nevus syndrome",
    keypoint: "Solar lentigo = linear（non-nested）；Nevus = nested clusters"
  },
  {
    group: "皮膚腫瘤", answer: "Dysplastic nevus",
    gene: "CDKN2A、BRAF/NRAS",
    histology: "Atypical nevus；irregular architecture + cytologic atypia",
    clinical: "Melanoma 風險↑；syndrome = CDKN2A germline mutation",
    keypoint: "Dysplastic nevus syndrome = CDKN2A mutation；melanoma 高風險"
  },
  {
    group: "皮膚腫瘤", answer: "Solar lentigo（老人斑）",
    gene: "—（日照累積損傷）",
    histology: "Linear（non-nested）melanocyte hyperplasia in basal layer；rete ridges elongation + thinning；不形成 nest",
    clinical: "老年人；日照誘發；良性",
    keypoint: "Non-nested = solar lentigo；nested = nevus；兩者均非 melanoma"
  },
  {
    group: "皮膚腫瘤", answer: "Seborrheic keratosis",
    gene: "FGFR3 mutation",
    histology: "Sheets of basaloid cell proliferation；horn cysts；exophytic；上突出表皮",
    clinical: "良性；老年人好發；突然大量出現 = Leser-Trelat sign（paraneoplastic）",
    keypoint: "Leser-Trelat sign = 突然大量 SK → 提示內臟惡性腫瘤（paraneoplastic）"
  },
  {
    group: "皮膚腫瘤", answer: "Mastocytosis",
    gene: "KIT activation（gain-of-function）",
    histology: "Mast cell 增生（mild → sheet-like）；Toluidine blue / Giemsa 染出胞質紫色 granules（metachromasia）",
    clinical: "Darier's sign（拍打→風疹塊）；Urticaria pigmentosa 最常見",
    keypoint: "Darier's sign；Toluidine blue / Giemsa → metachromatic granules"
  },
  {
    group: "皮膚腫瘤", answer: "Mycosis fungoides（MF）",
    gene: "—（CD4+ T cell lymphoma；epidermotropic）",
    histology: "Epidermotropism + Pautrier microabscesses；Band-like（lichenoid）T cell infiltration",
    clinical: "最常見 primary skin lymphoma；patch → plaque → tumor progression；CD4+",
    keypoint: "最常見 primary skin lymphoma = MF；Pautrier microabscesses（T cell 進入 epidermis）"
  },
  {
    group: "皮膚腫瘤", answer: "DFSP（隆突性皮膚纖維肉瘤）",
    gene: "t(17;22) COL1A1-PDGFB fusion → PDGFR activation（imatinib 有效）",
    histology: "Storiform pattern + honeycomb subcutaneous fat invasion",
    clinical: "最常見 primary skin sarcoma；intermediate grade；locally aggressive；易 recur，極少 metastasize",
    keypoint: "DFSP = COL1A1-PDGFB；Dermatofibroma = benign（無基因標誌，dimple sign）"
  },
  {
    group: "皮膚腫瘤", answer: "Dermatofibroma",
    gene: "—",
    histology: "良性 dermis 纖維增生；dimple sign（lateral pressure → skin depression）",
    clinical: "最常見 benign dermis tumor；下肢好發",
    keypoint: "Dimple sign；良性；vs DFSP = malignant potential + COL1A1-PDGFB"
  },
  {
    group: "皮膚腫瘤", answer: "Merkel cell carcinoma",
    gene: "Merkel cell polyomavirus（MCV）",
    histology: "Small blue neuroendocrine cells；CK20(+) perinuclear dot；neuroendocrine marker(+)",
    clinical: "免疫抑制者風險↑；老年；UV 暴露；台灣少，西方多",
    keypoint: "Neuroendocrine；MCV 相關；免疫抑制者高風險"
  },

  // ════════════════════════════════════════
  //  慢性發炎皮膚病  （來自「慢性發炎性皮膚病比較」表格）
  //  欄位：6P/特徵 | 部位 | Histology key finding | Koebner
  // ════════════════════════════════════════
  {
    group: "慢性發炎皮膚病", answer: "Psoriasis（乾癬）",
    gene: "T cell 媒介；HLA-Cw6 相關；TNF-α / IL-17 pathway",
    histology: "Psoriasiform hyperplasia；Munro's microabscess（角質層 neutrophil 聚集）；parakeratosis；hypogranulosis；suprapapillary plate thinning → Auspitz sign",
    clinical: "紅斑銀白鱗屑；Extensor（肘、膝）；scalp；Koebner(+)",
    keypoint: "Koebner(+)；Auspitz sign（剝鱗→微出血）；Munro's microabscess；Extensor"
  },
  {
    group: "慢性發炎皮膚病", answer: "Lichen planus（扁平苔癬）",
    gene: "CD8+ cytotoxic T cell 攻擊基底層",
    histology: "Lichenoid band-like interface dermatitis；saw-toothing acanthosis；hypergranulosis；orthokeratosis",
    clinical: "6P：Pruritic Purple Polygonal Planar Papules Plaques；Wickham striae；Flexor surface；oral mucosa；Koebner(+)",
    keypoint: "6P + Wickham striae；Flexor（vs Psoriasis = Extensor）；Koebner(+)；hypergranulosis"
  },
  {
    group: "慢性發炎皮膚病", answer: "Erythema multiforme",
    gene: "CD8+ cytotoxic T cells；HSV / drug 誘發",
    histology: "Interface dermatitis（basal vacuolization + dyskeratosis）；CD8+ T cells 攻擊 keratinocyte",
    clinical: "Target lesion（靶形病灶）；全身分布；Koebner(−)",
    keypoint: "Target lesion；Koebner(−)（vs Psoriasis/LP = Koebner(+)）"
  },
  {
    group: "慢性發炎皮膚病", answer: "Eczema / Contact dermatitis",
    gene: "Type IV hypersensitivity（T cell-mediated）",
    histology: "Acute = Spongiosis（核心）+ intraepidermal vesicle；Chronic = Acanthosis↑ + hyperkeratosis；biopsy 只能判分期不能判原因",
    clinical: "急性：vesicles、oozing；慢性：lichenification；接觸 / 過敏部位；Koebner(−)",
    keypoint: "Spongiosis = acute eczema 核心；biopsy 不能判原因（只能判分期）"
  },

  // ════════════════════════════════════════
  //  水泡病  （來自「水泡病比較（必考）」表格）
  //  欄位：裂隙位置 | Acantholysis | 抗體 | DIF pattern | 記憶點
  // ════════════════════════════════════════
  {
    group: "水泡病", answer: "Pemphigus vulgaris",
    gene: "IgG vs DSG3（desmoglein 3）→ suprabasal acantholysis",
    histology: "裂隙：Suprabasal split；tombstone row（基底細胞仍附著 dermis）；DIF：net-like intercellular",
    clinical: "皮膚 + 口腔黏膜；中老年；水泡薄易破；acantholysis(+)",
    keypoint: "DSG3 → suprabasal；tombstone row；口腔侵犯；DIF net-like intercellular"
  },
  {
    group: "水泡病", answer: "Pemphigus foliaceus",
    gene: "IgG vs DSG1（desmoglein 1）→ subcorneal acantholysis",
    histology: "裂隙：Subcorneal / near granular layer；DIF：net-like（superficial）；acantholysis(+)",
    clinical: "水泡薄易破；無 mucosal 侵犯（DSG3 仍保留）",
    keypoint: "DSG1 → subcorneal；無黏膜；同 Impetigo 裂隙位置但成因不同（autoimmune vs toxin）"
  },
  {
    group: "水泡病", answer: "Bullous pemphigoid",
    gene: "IgG vs BPAG1/2（hemidesmosome BP180 / BP230）",
    histology: "裂隙：Subepidermal split；eosinophils↑；大水泡不易破；DIF：linear（basement membrane）",
    clinical: "最常見水泡病；老人（elderly）；大水泡；acantholysis(−)",
    keypoint: "最常見；subepidermal；linear DIF（BMZ）；eosinophils↑；大水泡不易破"
  },
  {
    group: "水泡病", answer: "Dermatitis herpetiformis",
    gene: "IgA vs reticulin（anti-tissue transglutaminase）",
    histology: "裂隙：Subepidermal；Neutrophil microabscesses at tips of dermal papillae；DIF：granular IgA in dermal papillae tips；acantholysis(−)",
    clinical: "Celiac disease（gluten-sensitive）相關；extensor surface；劇癢；acantholysis(−)",
    keypoint: "IgA granular（dermal papillae tips）= DH；celiac disease 相關；neutrophilic microabscesses"
  },
  {
    group: "水泡病", answer: "Epidermolysis bullosa（EB）",
    gene: "遺傳性 structural protein defects（keratin / laminin / type VII collagen，依亞型）",
    histology: "裂隙：Subepidermal；acantholysis(−)；DIF(−)；依缺損蛋白不同亞型",
    clinical: "先天性遺傳；非自體免疫；輕微外傷即起泡",
    keypoint: "遺傳性（非自體免疫）；DIF(−)；依缺損蛋白分型"
  },
  {
    group: "水泡病", answer: "Impetigo",
    gene: "S. aureus exfoliative toxin 裂解 DSG1（外源性）",
    histology: "裂隙：Subcorneal pustule；neutrophil 聚集；DIF(−)；culture(+)；acantholysis(−)",
    clinical: "細菌感染；好發臉部、手部；小兒多見",
    keypoint: "裂隙同 PF（subcorneal + DSG1）但成因不同：PF = autoimmune DIF(+)；Impetigo = 毒素 DIF(−) culture(+)"
  },

  // ════════════════════════════════════════
  //  感染性皮膚病  （來自「感染性皮膚病 & 脂膜炎」表格）
  //  欄位：病原/機制 | B11重要 Micro | 記憶點
  // ════════════════════════════════════════
  {
    group: "感染性皮膚病", answer: "Warts（疣）",
    gene: "HPV（型別依好發部位而異）",
    histology: "Koilocytosis：cytoplasmic vacuolization + perinuclear halo（HPV cytopathic effect）；verrucous / papillomatous 增生",
    clinical: "良性；自限性；HPV 16/18 = high-risk（anogenital）",
    keypoint: "Koilocytosis = HPV 感染標誌"
  },
  {
    group: "感染性皮膚病", answer: "Molluscum contagiosum",
    gene: "Poxvirus（Molluscum contagiosum virus）",
    histology: "Molluscum body（Henderson-Patterson body）：stratum granulosum/corneum keratinocyte 內大型均質 cytoplasmic inclusion；核被推至旁側；Cuplike verrucous 增生",
    clinical: "自限性；免疫不全者病灶多；臍凹狀丘疹",
    keypoint: "Molluscum body = 大型 cytoplasmic inclusion（非核內）；核被擠至旁側"
  },
  {
    group: "感染性皮膚病", answer: "Superficial fungal infection",
    gene: "Dermatophytes（Microsporum / Epidermophyton / Trichophyton）；Tinea versicolor = Malassezia furfur",
    histology: "Mild eczematous dermatitis + intraepidermal neutrophils；特殊染色見 hyphae in stratum corneum",
    clinical: "侷限於 stratum corneum / 指甲，不進入 dermis；依部位命名（tinea capitis / corporis / pedis）",
    keypoint: "侷限 stratum corneum（不進 dermis）；hyphae 需特殊染色"
  },
  {
    group: "感染性皮膚病", answer: "Erythema nodosum（結節性紅斑）",
    gene: "—（延遲性過敏；感染 / 藥物 / sarcoidosis 誘發）",
    histology: "Septal panniculitis（脂肪小葉間隔的發炎）；無 vasculitis",
    clinical: "最常見 panniculitis；好發小腿前側；紅、痛、自癒（自限性）",
    keypoint: "最常見 panniculitis；Septal（間隔性）panniculitis；無 vasculitis"
  },

  // ════════════════════════════════════════
  //  骨骼肌疾病  （來自「骨骼肌疾病分類表」＋「NMJ疾病」表格）
  //  欄位：關鍵基因/抗體 | Micro特徵 | 流行病學&症狀 | 記憶點
  // ════════════════════════════════════════
  {
    group: "骨骼肌疾病", answer: "DMD（Duchenne MD）",
    gene: "Dystrophin（Xp21）X-linked recessive；complete absence of dystrophin（IHC 消失）",
    histology: "Dystrophin IHC 完全消失；fiber size variation + rounding；central nuclei；epimysial fibrosis + fatty replacement；fiber splitting",
    clinical: "男孩；X-linked；30歲前死亡（心肺衰竭）；Becker MD = 第二常見，truncated dystrophin，較晚發病",
    keypoint: "DMD = complete absence；Becker = truncated（功能部分保留）"
  },
  {
    group: "骨骼肌疾病", answer: "Dermatomyositis（DM）",
    gene: "DMSAs：Anti-TIF1-γ（癌症相關）；Anti-Mi2；Anti-MDA5（ILD 為主）；Anti-NXP-2（兒童、calcinosis）",
    histology: "Perifascicular atrophy；MAC 沉積於 capillary beds（非 myocytes！）；Type I IFN pathway 活化",
    clinical: "Heliotrope rash（眼瞼紫紅）；Gottron rash（指關節背側）；Anti-synthetase syndrome（aSS）= ILD + 肌肉 + 關節",
    keypoint: "MAC 沉積 = capillary beds（非 myocytes）— 考古陷阱；aSS = 抗 ARS Ab（Anti-Jo1）"
  },
  {
    group: "骨骼肌疾病", answer: "IBM（Inclusion Body Myositis）",
    gene: "TDP-43（cytoplasmic aggregation）；CD8+ T cells；sarcolemma MHC class I↑；VCP mutation（可同時引起 ALS/FTD）",
    histology: "Rimmed vacuoles + Congo-red(+) amyloid；CD8+ T cells endomysial infiltration",
    clinical: ">65y；最常見 elderly inflammatory myopathy；先影響 distal muscle；steroid 無效",
    keypoint: "Rimmed vacuoles = IBM（≠ PM）；steroid 無效；>65y；distal muscle 先萎縮"
  },
  {
    group: "骨骼肌疾病", answer: "IMNM（免疫性壞死性肌病）",
    gene: "Anti-HMG-CoA reductase（statin 相關）；Anti-SRP（較重，心臟侵犯 + dysphagia）",
    histology: "Prominent myofiber necrosis + macrophage phagocytosis；paucity of inflammatory infiltrate（與 DM/PM 不同）",
    clinical: "排除性診斷；steroid 有效（vs IBM 無效）；anti-SRP 預後較差",
    keypoint: "Paucity of inflammatory infiltrate（與 DM/PM 不同）；steroid 有效"
  },
  {
    group: "骨骼肌疾病", answer: "Polymyositis（PM）",
    gene: "—（CD8+ T cells 直接攻擊 myocyte；MHC class I↑）",
    histology: "CD8+ T cells endomysial infiltration；MHC class I↑ on sarcolemma",
    clinical: "排除性診斷（排除 IBM / DM / IMNM）；近端肌無力",
    keypoint: "PM = 排除性診斷；無 rimmed vacuoles（IBM）；無 perifascicular atrophy（DM）"
  },
  {
    group: "骨骼肌疾病", answer: "MG（Myasthenia gravis）",
    gene: "Anti-AChR Ab（postsynaptic NMJ）",
    histology: "Postsynaptic membrane 損傷；receptor 降解 + complement fixation",
    clinical: "波動性、無痛性；活動後惡化；10% thymoma；30% thymic hyperplasia（年輕病人）",
    keypoint: "Postsynaptic；重複刺激→力量遞減；10% thymoma；vs LEMS = presynaptic + 重複刺激改善"
  },
  {
    group: "骨骼肌疾病", answer: "LEMS（Lambert-Eaton）",
    gene: "Anti-VGCC Ab（presynaptic Ca²⁺ channel）",
    histology: "Presynaptic Ca²⁺ channel 受阻 → ACh release↓",
    clinical: "四肢無力；重複刺激→力量短暫增加（Lambert's sign）；50% 合併 small cell lung carcinoma",
    keypoint: "Presynaptic；重複刺激→改善；50% SCLC；vs MG = postsynaptic + 重複刺激惡化"
  },
  {
    group: "骨骼肌疾病", answer: "Mitochondrial myopathy",
    gene: "mtDNA / nuclear gene mutation",
    histology: "Ragged red fibers（Gomori trichrome）；SDH sublaminar accumulation；COX activity↓",
    clinical: "多系統受影響（眼外肌、心臟、CNS）",
    keypoint: "Ragged red fibers = Gomori trichrome（非 NADH！）；NADH 看 target fiber / core"
  },
  {
    group: "骨骼肌疾病", answer: "Core myopathy",
    gene: "RYR1（ryanodine receptor）；Autosomal dominant",
    histology: "NADH-TR：central core 淡染（myofibrillar disruption）；EM：Z-band 消失",
    clinical: "先天性；近端肌無力；malignant hyperthermia 風險↑（RYR1）",
    keypoint: "NADH-TR → central core 淡染；RYR1 = malignant hyperthermia 相關"
  },
  {
    group: "骨骼肌疾病", answer: "Nemaline myopathy",
    gene: "ACTA1（skeletal muscle α-actin）mutation",
    histology: "Gomori trichrome：cytoplasmic rod inclusions；EM：nemaline rods（Z-band 衍生物）",
    clinical: "先天性；近端肌無力；新生兒型可致命",
    keypoint: "Nemaline rods = Z-band 衍生；Gomori trichrome 可見"
  },
  {
    group: "骨骼肌疾病", answer: "Neurogenic atrophy（SMA / ALS）",
    gene: "SMA = SMN1；ALS = SOD1 / TDP-43 等",
    histology: "Angular fiber（denervation）；Fiber type grouping（reinnervation）；Group atrophy（reinnervating neuron 死亡 → 整批萎縮）",
    clinical: "SMA = 小孩；ALS = 成人（上下運動神經元共同受損）；最終 fibrosis",
    keypoint: "Angular fiber → Denervation；Fiber type grouping → Reinnervation；Group atrophy → 最終 fibrosis"
  },
  {
    group: "骨骼肌疾病", answer: "CFTD（先天性纖維比例失調）",
    gene: "—",
    histology: "ATPase：Type I fiber atrophy（Type I 比 Type II 小 >35%）",
    clinical: "先天性；近端肌無力",
    keypoint: "Type I atrophy（vs 老化 = Type II atrophy）"
  },
  {
    group: "骨骼肌疾病", answer: "Centronuclear myopathy（肌小管肌病）",
    gene: "DNM2（dynamin 2）；X-linked 型 = MTM1",
    histology: "Central nuclei（核不移到周邊，維持在中央）；= myotubular myopathy",
    clinical: "先天性；肌無力；與 DMD 區別：dystrophin 正常",
    keypoint: "Central nuclei（正常 <3%，此病 >> 3%）；= myotubular myopathy"
  },

  // ════════════════════════════════════════
  //  先天 & 代謝骨病
  //  （來自「先天骨骼疾病基因表」＋「代謝骨病比較」表格）
  //  欄位：基因/機制 | Micro/X-ray | Lab/臨床 | 記憶點
  // ════════════════════════════════════════
  {
    group: "先天 & 代謝骨病", answer: "Achondroplasia（軟骨發育不全）",
    gene: "FGFR3 gain-of-function（AD）→ 過度抑制 chondrocyte 增殖 → endochondral ossification↓",
    histology: "Growth plate 不足；proximal limb short（rhizomelic dwarfism）",
    clinical: "最常見侏儒症；大頭、短肢；智力正常；顱底窄",
    keypoint: "FGFR3 gain-of-function（AD）= 最常見侏儒症"
  },
  {
    group: "先天 & 代謝骨病", answer: "Osteogenesis Imperfecta（OI）",
    gene: "COL1A1 / COL1A2（AD）；Type I collagen 質/量不足；dominant negative effect",
    histology: "Type I collagen 異常 → 骨脆；多發骨折；薄弱結締組織",
    clinical: "Blue sclera；brittle bones；hearing loss；dental imperfection（dentinogenesis imperfecta）",
    keypoint: "Blue sclera + brittle bones = OI；COL1A1/COL1A2 dominant negative"
  },
  {
    group: "先天 & 代謝骨病", answer: "Osteopetrosis（骨石症）",
    gene: "CLCN7（AD Albers-Schönberg）；TCIRG1（AR）；CA2（AR + renal tubular acidosis）；RANKL mutation（AR，osteoclast-poor）",
    histology: "Osteoclast dysfunction → woven bone 無法 remodel；Erlenmeyer flask deformity（X-ray）；marble bone",
    clinical: "骨髓腔消失 → pancytopenia；HSCT 治療（osteoclast 為骨髓來源）",
    keypoint: "HSCT 治療；Erlenmeyer flask；RANKL mutation = osteoclast-poor variant；CA2 mutation = renal tubular acidosis"
  },
  {
    group: "先天 & 代謝骨病", answer: "Osteoporosis（骨質疏鬆）",
    gene: "Estrogen↓ → RANKL↑、OPG↓ → osteoclast↑；mineralization 正常",
    histology: "Thin trabeculae；cortical thinning；mineralization 正常（vs Osteomalacia = mineralization↓）",
    clinical: "停經後最常見代謝骨病；compression fracture；bisphosphonate / denosumab 治療",
    keypoint: "Mineralization 正常 = Osteoporosis；mineralization↓ = Osteomalacia；兩者均 bone mass↓"
  },
  {
    group: "先天 & 代謝骨病", answer: "Rickets / Osteomalacia",
    gene: "Vit D↓ → Ca/P↓ → mineralization↓ → osteoid↑（未礦化骨基質堆積）",
    histology: "Growth plate 變寬（Rickets = 小孩）；osteoid↑；Lab：Ca/P↓，PTH↑",
    clinical: "Rickets = 小孩（growth plate open）；Osteomalacia = 成人；膝外翻 / 內翻",
    keypoint: "Ca/P↓ + osteoid↑；mineralization↓；Rickets（小孩）vs Osteomalacia（成人）"
  },
  {
    group: "先天 & 代謝骨病", answer: "Hyperparathyroidism（骨病變）",
    gene: "PTH↑ → RANKL↑ → osteoclast↑ → bone resorption↑",
    histology: "Brown tumor（fracture → 出血 → fibrosis）；Osteitis fibrosa cystica；dissecting osteitis；Lab：Ca↑、PTH↑",
    clinical: "Von Recklinghausen disease of bone；polyuria、kidney stones（高鈣血症症狀）",
    keypoint: "Brown tumor = 出血後 fibrosis（非真正腫瘤）；Osteitis fibrosa cystica"
  },
  {
    group: "先天 & 代謝骨病", answer: "Paget disease（骨 Paget 病）",
    gene: "SQSTM1（50% familial）；osteoclast overactivation",
    histology: "早期：超大 osteoclasts（>12 nuclei）+ swallowtail pattern；晚期 burnt-out：Mosaic / jigsaw pattern（cement lines）；picture-frame vertebra；blade of grass（lytic front）",
    clinical: "ALP↑↑（Ca/P 正常）；骨骼痛；high-output heart failure；<1% → osteosarcoma（polyostotic = 5-10%）",
    keypoint: "ALP↑↑ + Ca/P 正常 = Paget；超大 osteoclasts（>12 nuclei）；Mosaic pattern（晚期）"
  },

  // ════════════════════════════════════════
  //  骨腫瘤  （來自「骨腫瘤分類總表」）
  //  欄位：良/惡/中 | 好發年齡 | 好發位置 | 基因 | X-ray | Micro key
  // ════════════════════════════════════════
  {
    group: "骨腫瘤", answer: "Osteosarcoma",
    gene: "p53 / Rb（70% sporadic）；MDM2/CDK4（low-grade）",
    histology: "Malignant osteoid（lace-like，腫瘤細胞產生）；Codman's triangle（periosteal reaction）；lytic + blastic",
    clinical: "惡性；1st peak <20y；Long bone metaphysis（50% 膝蓋周圍）；2nd peak 50-60y（繼發）；chemo 有效",
    keypoint: "Metaphysis（vs Ewing = diaphysis）；Codman's triangle；chemo 有效（vs Chondrosarcoma 無效）"
  },
  {
    group: "骨腫瘤", answer: "Chondrosarcoma",
    gene: "Central（from enchondroma）= IDH1/IDH2；Peripheral（from osteochondroma）= EXT1/EXT2",
    histology: "Infiltrative border + host bone entrapment；hypercellular nodules；myxoid stroma；cytologic atypia；flocculent calcification（ring and arc）；cortex breakthrough（high-grade）",
    clinical: "惡性；40y+；Axial skeleton（pelvis、ribs）；chemo 無效，直接手術",
    keypoint: "Chemo 無效（vs OS 有效）；Central = IDH；Peripheral = EXT；40y+；axial"
  },
  {
    group: "骨腫瘤", answer: "Ewing sarcoma",
    gene: "t(11;22) EWS-FLI1 fusion（EWSR1-FLI1）",
    histology: "Small blue round cells；Homer-Wright rosettes（偶見）；Onion-skin periosteal reaction（X-ray）",
    clinical: "惡性；<20y；Long bone diaphysis；pelvis；chemo 有效",
    keypoint: "Diaphysis（vs OS = metaphysis）；onion-skin X-ray；t(11;22)；<20y"
  },
  {
    group: "骨腫瘤", answer: "GCT（Giant cell tumor）",
    gene: "H3.3 G34W mutation；RANKL 高表現（recruit osteoclast-type giant cells）",
    histology: "Osteoclast-type giant cells（非 tumor cells！）+ mononuclear osteoblastic precursor；frequent necrosis + mitosis；Soap bubble（X-ray）",
    clinical: "中等（locally aggressive）；30-50y；Epiphysis（distal femur / proximal tibia）；Denosumab 治療",
    keypoint: "Giant cells = osteoclast-type（RANKL 招募），非 tumor cells；Epiphysis（vs ABC = metaphysis）"
  },
  {
    group: "骨腫瘤", answer: "Fibrous dysplasia",
    gene: "GNAS1 somatic mosaic（同 McCune-Albright）",
    histology: "Fibroblast-like cells + curvilinear woven bone；無 osteoblastic rimming（重要！）；ground-glass X-ray",
    clinical: "良性；Adolescence；femur、rib、skull；polyostotic → McCune-Albright syndrome",
    keypoint: "無 osteoblastic rimming；GNAS1 somatic = 同 McCune-Albright；ground-glass X-ray"
  },
  {
    group: "骨腫瘤", answer: "ABC（Aneurysmal Bone Cyst）",
    gene: "USP6 rearrangement（70%）",
    histology: "Blood-filled cysts；plump spindle cells + osteoclast-type giant cells；reactive woven bone lined by osteoblasts；blue bone（1/3 = calcified basophilic matrix）；expansile eggshell + air-fluid level（X-ray）",
    clinical: "良性；Adolescence；femur、tibia、vertebra",
    keypoint: "Blood-filled cysts；blue bone；Metaphysis/diaphysis（vs GCT = Epiphysis）"
  },
  {
    group: "骨腫瘤", answer: "Osteochondroma",
    gene: "EXT1 / EXT2（hereditary = HME）",
    histology: "Bony stalk + cartilage cap；medullary cavity 連通 host bone（X-ray）",
    clinical: "良性；最常見 bone tumor（overall）；青少年；Long bone metaphysis near growth plate",
    keypoint: "Medullary cavity 連通 = osteochondroma（鑑別關鍵）"
  },
  {
    group: "骨腫瘤", answer: "Enchondroma",
    gene: "IDH1 / IDH2（somatic mosaic）",
    histology: "Well-circumscribed lobulated nodules；benign hyaline chondrocytes；±endochondral ossification / calcification；lobulated calcification（X-ray）",
    clinical: "良性；20-50y；Medullary cavity（short / long bone）；可惡化為 central chondrosarcoma",
    keypoint: "IDH1/2 = enchondroma & central chondrosarcoma；short tubular bone（手指）好發"
  },

  // ════════════════════════════════════════
  //  關節疾病  （來自「OA vs RA vs Gout」＋「CPPD」表格）
  // ════════════════════════════════════════
  {
    group: "關節疾病", answer: "OA（Osteoarthritis）",
    gene: "—（退化性；chondrocyte apoptosis；cartilage wear）",
    histology: "Fissures；loose bodies（cartilage 碎片游離）；osteophytes（骨刺）；bone eburnation；subchondral cysts",
    clinical: "老年（>60y）；weight-bearing joints（knee、hip）；非發炎；X-ray：joint space↓ + osteophytes",
    keypoint: "退化性（非發炎）；osteophytes；loose bodies；vs RA = 自體免疫 + pannus"
  },
  {
    group: "關節疾病", answer: "RA（Rheumatoid arthritis）",
    gene: "ACPA（70%）、RF（80%）；HLA-DR4；CD4+ T（Th1/Th17）",
    histology: "Pannus（synovium + inflammatory cells 侵蝕軟骨）；lymphoid follicles；Rheumatoid nodules（fibrinoid necrosis）",
    clinical: "20-40y；女性多；small joints（手指→手腕→全身）；morning stiffness >1hr；X-ray：joint erosion",
    keypoint: "ACPA + RF + HLA-DR4；pannus；small joints（vs OA = weight-bearing）"
  },
  {
    group: "關節疾病", answer: "Gout（痛風）",
    gene: "Uric acid↑ → monosodium urate crystals；HGPRT deficiency（Lesch-Nyhan）",
    histology: "Negatively birefringent needle-shaped crystals（黃棕色）；固定需 absolute alcohol（formalin 溶解 urate）",
    clinical: "中老年男性；metatarsal（腳大拇指）；purine 飲食；Tophus；punched-out lesion（X-ray）",
    keypoint: "固定 = absolute alcohol（非 formalin！）；hyperuricemia → gout 只有 10%（necessary not sufficient）"
  },
  {
    group: "關節疾病", answer: "CPPD（Pseudogout）",
    gene: "Sporadic 最常見；ANKH germline gain-of-function（AD 遺傳型）→ 胞外 pyrophosphate↑",
    histology: "Rhomboid crystals；blue-purple aggregates；0.5-5 µm；birefringent；inflammation milder than gout",
    clinical: "50y+；no sex/race difference；knee 最常見；chondrocalcinosis（X-ray）",
    keypoint: "菱形（rhomboid）藍紫色 = CPPD；針狀（needle）黃棕色 = Gout"
  },
  {
    group: "關節疾病", answer: "Lesch-Nyhan syndrome",
    gene: "完全 HGPRT deficiency（X-linked recessive）→ uric acid↑（secondary gout）",
    histology: "Urate crystal deposition；secondary gout",
    clinical: "Secondary gout + neurologic symptoms + self-mutilation（自傷行為）",
    keypoint: "完全 HGPRT = secondary gout + 神經症狀；Partial HGPRT = primary gout（只有關節）"
  },

  // ════════════════════════════════════════
  //  眼耳疾病  （來自「眼部腫瘤位置表」＋「耳部重要疾病」＋「其他重要疾病」表格）
  // ════════════════════════════════════════
  {
    group: "眼耳疾病", answer: "Uveal melanoma",
    gene: "GNAQ / GNA11（非 BRAF！）；Loss of Ch3；BAP1 mutation",
    histology: "Epithelioid cells（預後差）vs spindle cells（預後好）；lateral extent（非 depth）為預後因子",
    clinical: "最常見原發性眼內腫瘤；血行轉移→肝（tumor-specific tropism）；UV 關聯性低；5-year survival 80%",
    keypoint: "GNAQ/GNA11（非 BRAF）= Uveal；BRAF V600E = Conjunctival melanoma；lateral extent = 預後因子"
  },
  {
    group: "眼耳疾病", answer: "Conjunctival melanoma",
    gene: "BRAF V600E（40%）",
    histology: "多起源 limbus；可來自 PAM（primary acquired melanosis）with atypia",
    clinical: "中年；25% 最終致死；sentinel node（parotid/submandibular）biopsy",
    keypoint: "BRAF V600E = Conjunctival（vs Uveal = GNAQ/GNA11）"
  },
  {
    group: "眼耳疾病", answer: "Retinoblastoma",
    gene: "RB germline mutation（13q14）；two-hit hypothesis",
    histology: "Flexner-Wintersteiner rosettes（真正管狀結構，圍繞中央空腔）；small blue cells",
    clinical: "小孩最常見 intraocular malignant tumor；leukocoria（白瞳孔）；strabismus",
    keypoint: "Flexner-Wintersteiner rosettes；leukocoria = 白瞳孔；RB gene two-hit"
  },
  {
    group: "眼耳疾病", answer: "BCC（Eyelid）",
    gene: "PTCH loss（Hedgehog pathway）",
    histology: "Basaloid island + peripheral palisading；lower eyelid / medial canthus 好發",
    clinical: "最常見 eyelid malignancy；與日照有關；indolent；90%+ 三年內治癒",
    keypoint: "最常見 eyelid malignancy = BCC；lower eyelid / medial canthus"
  },
  {
    group: "眼耳疾病", answer: "Sebaceous carcinoma（Eyelid）",
    gene: "—（與 Muir-Torre 較無關！）",
    histology: "Pagetoid spread into conjunctiva；lobular sebaceous architecture；長得像 chalazion 易誤診",
    clinical: "Upper eyelid meibomian gland 好發；侵襲性高；易誤診為 chalazion",
    keypoint: "Eyelid sebaceous carcinoma 與 Muir-Torre 較無關（其他部位 sebaceous tumor 才相關）"
  },
  {
    group: "眼耳疾病", answer: "Pterygium（翼狀贅肉）",
    gene: "—（日照 actinic damage）",
    histology: "Fibrovascular connective tissue 鑽入 Bowman layer（cornea）；solar elastosis",
    clinical: "會延伸超過 pupillary axis（侵入 cornea）；日照相關",
    keypoint: "Pterygium 超過 pupillary axis（侵 cornea）；Pinguecula 不會（止於 limbus 旁）"
  },
  {
    group: "眼耳疾病", answer: "Pinguecula（眼瞼裂斑）",
    gene: "—（日照 actinic damage）",
    histology: "Solar elastosis（stroma degeneration）；submucosal elevation on conjunctiva",
    clinical: "不超過 pupillary axis；日照相關；無需治療",
    keypoint: "止於 limbus（不過 pupillary axis）；成因組織學同 Pterygium，但不侵 cornea"
  },
  {
    group: "眼耳疾病", answer: "Paraganglioma（中耳）",
    gene: "Germline SDH（A/B/C/D/AF2）mutation；<30y 發病需懷疑 germline",
    histology: "Middle ear neuroendocrine tumor（chief cells）；組織學外觀 benign",
    clinical: "傳導性聽力缺損；50% local recurrence；一律視為 malignancy",
    keypoint: "外觀 benign，但一律視為 malignancy；50% local recurrence；SDH mutation"
  },
  {
    group: "眼耳疾病", answer: "Otosclerosis（耳硬化症）",
    gene: "AD，variable penetrance（親代無症狀→子代可發病）；familial 通常雙側",
    histology: "Stapes footplate 處異常骨化 → fixation to oval window",
    clinical: "Gradual conductive hearing loss；年輕/中年；stapedectomy 可改善",
    keypoint: "Stapes footplate 骨化；gradual onset；AD variable penetrance"
  },
  {
    group: "眼耳疾病", answer: "Cholesteatoma（膽酯瘤）",
    gene: "—（COM 後繼發；非腫瘤性）",
    histology: "Squamous epithelium ingrowth → keratin-filled cyst；bone erosion；non-neoplastic",
    clinical: "COM → 耳膜破裂 → squamous epithelium ingrowth；progressive bone erosion；俗稱珍珠耳",
    keypoint: "Non-neoplastic；繼發自 COM；骨頭侵蝕；珍珠耳"
  },
  {
    group: "眼耳疾病", answer: "Open-angle glaucoma",
    gene: "—（流出阻力↑的根本原因 unknown，B11重要）",
    histology: "房水可進入 trabecular meshwork，但流出阻力↑ → IOP↑；optic nerve damage",
    clinical: "最常見 glaucoma 類型；緩慢進展；視野缺損（周邊先）",
    keypoint: "最常見；根本原因 unknown；vs Angle-closure = 物理性阻礙（周邊虹膜黏附）"
  },
  {
    group: "眼耳疾病", answer: "Angle-closure glaucoma",
    gene: "—（淺前房解剖結構；遠視為危險因子）",
    histology: "周邊虹膜黏附 trabecular meshwork → 物理性阻礙；iris bombé",
    clinical: "急性發作（紅眼、劇痛、頭痛、噁心）；淺前房；遠視者易發",
    keypoint: "物理性阻礙（vs Open-angle = 流出阻力↑原因 unknown）；iris bombé；急性"
  },
  {
    group: "眼耳疾病", answer: "Graves' ophthalmopathy",
    gene: "自體免疫（TSH receptor Ab 等）→ 眼外肌 ECM 堆積",
    histology: "眼外肌 muscle belly 纖維化；tendon 不受影響（重要！）",
    clinical: "Axial proptosis；凸眼程度與甲狀腺功能無直接相關；治療甲狀腺後 proptosis 不一定改善",
    keypoint: "Tendon 不受影響（muscle belly 纖維化）；治療甲狀腺後 proptosis 不一定改善"
  },

  // ════════════════════════════════════════
  //  軟組織腫瘤  （來自「軟組織腫瘤速查表」）
  //  欄位：來源 | 良/惡/中 | 基因 | 流行病學 | 好發部位 | 症候群 | Histology | 預後
  // ════════════════════════════════════════
  {
    group: "軟組織腫瘤", answer: "WD Liposarcoma / ALT",
    gene: "MDM2 + CDK4 amplification（12q13-15）",
    histology: "Atypical spindle cells in fibrous septa；散在 lipoblasts",
    clinical: "惡性（retroperitoneum）/ 中等（extremity = ALT）；40-60y；復發但少轉移",
    keypoint: "Retroperitoneum = malignant；Extremity（切乾淨）= ALT；MDM2 amplification"
  },
  {
    group: "軟組織腫瘤", answer: "Myxoid liposarcoma",
    gene: "t(12;16) FUS-DDIT3",
    histology: "Chicken-wire capillary + lipoblasts；uniform cytology（monomorphic）",
    clinical: "中等；30-40y；thigh（非 retroperitoneum）",
    keypoint: "Chicken-wire capillary；thigh（非 retroperitoneum）；FUS-DDIT3；中等預後"
  },
  {
    group: "軟組織腫瘤", answer: "Pleomorphic liposarcoma",
    gene: "Complex karyotype（non-specific）",
    histology: "Pleomorphic lipoblasts（large；ugly nuclei；single / multi-vacuolated cytoplasm）",
    clinical: "惡性；中老年；thigh（很少長 retroperitoneum）；四型 LPS 中預後最差",
    keypoint: "LPS 四型預後：WD 最好 > Myxoid > Dedifferentiated > Pleomorphic 最差"
  },
  {
    group: "軟組織腫瘤", answer: "Nodular fasciitis",
    gene: "MYH9-USP6 fusion（t(17;22)，與 DFSP 染色體相同但不同 gene）",
    histology: "Tissue culture-like pattern；stellate/bipolar cells + collagen；25% trauma history",
    clinical: "良性；Young adult；upper extremity subcutis；self-limited（spontaneously regressing）；易誤診為惡性",
    keypoint: "Self-limited；不需手術；易誤診為惡性 → 過度切除"
  },
  {
    group: "軟組織腫瘤", answer: "Deep fibromatosis（Desmoid tumor）",
    gene: "APC or β-catenin（CTNNB1）mutation → Wnt signaling；Gardner syndrome（FAP variant）",
    histology: "Bland spindle cells without atypia；abundant collagen；infiltrates muscle",
    clinical: "中等（locally aggressive）；不轉移；切除有刺激生長作用→觀察為主；abdominal wall / mesentery",
    keypoint: "Locally aggressive 但不轉移；切除有刺激生長→觀察；Gardner syndrome（APC）"
  },
  {
    group: "軟組織腫瘤", answer: "SFT（Solitary fibrous tumor）",
    gene: "NAB2-STAT6 fusion（highly specific）→ IHC：STAT6 nucleus(+)",
    histology: "Staghorn branching vessels（鹿角狀）；spindle cells + collagen；IHC STAT6 nucleus(+)",
    clinical: "Pleura 最常；meninges（舊稱 hemangiopericytoma）；rare paraneoplastic hypoglycemia（IGF2）",
    keypoint: "Staghorn vessels；STAT6 IHC(+)；IGF2 → 低血糖（腫瘤切除後自癒）"
  },
  {
    group: "軟組織腫瘤", answer: "Synovial sarcoma",
    gene: "t(X;18) SS18-SSX fusion（highly specific）",
    histology: "Biphasic（epithelioid + spindle cells）；有時 monophasic",
    clinical: "惡性；15-40y（young adult）；extremity near joints",
    keypoint: "Young adult；biphasic；t(X;18)；near joints"
  },
  {
    group: "軟組織腫瘤", answer: "Embryonal RMS",
    gene: "RAS pathway（heterogeneous）",
    histology: "Rhabdomyoblasts + striations；myxoid stroma；Botryoid variant = Cambium layer（mucosa-lined hollow organs）",
    clinical: "惡性；0-10y；Head & neck / GU tract；最常見（50%）＋最好預後的 RMS",
    keypoint: "最常見 RMS（50%）；0-10y；H&N/GU；預後最好"
  },
  {
    group: "軟組織腫瘤", answer: "Alveolar RMS",
    gene: "t(2;13) PAX3-FOXO1 or t(1;13) PAX7-FOXO1（PAX3 預後較差）",
    histology: "Small round cells；alveolar pattern；discohesive；IHC：desmin + myogenin（diffuse）",
    clinical: "惡性；10-25y（teenagers）；extremity / paranasal sinuses；可淋巴轉移（sarcoma 例外！）",
    keypoint: "Sarcoma 通常血行轉移；Alveolar RMS 例外（可淋巴轉移）；PAX3 預後較 PAX7 差"
  },
  {
    group: "軟組織腫瘤", answer: "Pleomorphic RMS",
    gene: "Complex karyotype",
    histology: "Pleomorphic cells with eosinophilic cytoplasm；無 striations；需 IHC（desmin/myogenin/myo-D1）確認",
    clinical: "惡性；Older adults；extremity；預後最差的 RMS",
    keypoint: "最差預後 RMS；無 striations；需 IHC 確認；older adults"
  },
  {
    group: "軟組織腫瘤", answer: "UPS（Undifferentiated Pleomorphic Sarcoma）",
    gene: "Complex karyotype（non-specific）；舊稱 MFH",
    histology: "看不出分化方向；pleomorphic；排除性診斷",
    clinical: "惡性；成人最常見 sarcoma 大類；中老年；四肢深部 soft tissue",
    keypoint: "成人最常見 sarcoma = UPS（MFH）；排除性診斷（看不出分化方向）"
  },
  {
    group: "軟組織腫瘤", answer: "Leiomyosarcoma",
    gene: "—",
    histology: "子宮 LMS：necrosis = 最重要惡性標準；chemo 效果有限",
    clinical: "惡性；成年女性好發；子宮、四肢、後腹腔；大血管（IVC）起源者最 aggressive",
    keypoint: "子宮 LMS：necrosis = 惡性標準；chemo 效果差"
  },
  {
    group: "軟組織腫瘤", answer: "Myxofibrosarcoma（MFS）",
    gene: "Complex karyotype（non-specific）",
    histology: "Multinodular myxoid tumor；curvilinear vessels；infiltrative border",
    clinical: "惡性；Elderly；extremity subcutis；最常見 superficial sarcoma；比 UPS 較 indolent",
    keypoint: "最常見 superficial sarcoma；curvilinear vessels；subcutis"
  },
  {
    group: "軟組織腫瘤", answer: "Angiosarcoma / Stewart-Treves",
    gene: "—（HHV8 → Kaposi sarcoma；Stewart-Treves = 淋巴水腫後繼發）",
    histology: "Vascular channel formation；high-grade cytology；高侵襲性",
    clinical: "惡性；Stewart-Treves：乳癌術後 axillary LN 切除 → 長期淋巴水腫 → secondary angiosarcoma（上臂）",
    keypoint: "Stewart-Treves = 乳癌術後淋巴水腫 → secondary angiosarcoma；HHV8 → Kaposi sarcoma"
  },

  // ════════════════════════════════════════
  //  遺傳症候群  （來自「遺傳性腫瘤症候群總覽表」）
  //  欄位：基因 | Pathway | 主要腫瘤/表現 | 記憶點
  // ════════════════════════════════════════
  {
    group: "遺傳症候群", answer: "NF1",
    gene: "NF1（17q11.2）；AD；neurofibromin = RAS GTPase activator",
    histology: "Neurofibromas（非 schwannoma！）；MPNST（lifetime risk 8-13%）；pilocytic astrocytoma；Lisch nodules（虹膜 hamartoma）",
    clinical: "Café-au-lait spots（>5mm×6+ 小孩；>15mm×6+ 成人）；RAS-MAPK pathway",
    keypoint: "NF1 長 neurofibroma（非 schwannoma）；Schwannomatosis 長 schwannoma（非 neurofibroma）"
  },
  {
    group: "遺傳症候群", answer: "NF2",
    gene: "NF2（22q12）；AD；merlin = tumor suppressor（RAS-MAPK）",
    histology: "Bilateral vestibular schwannoma（CN8；CV angle）；meningioma；spinal ependymoma",
    clinical: "Bilateral vestibular schwannoma = 確診；聽力缺損",
    keypoint: "Bilateral vestibular schwannoma = NF2 確診；vs Schwannomatosis = spinal/cutaneous（無 bilateral vestibular）"
  },
  {
    group: "遺傳症候群", answer: "Tuberous sclerosis",
    gene: "TSC1 / TSC2；AD；hamartin/tuberin → 抑制 mTOR",
    histology: "Cortical tubers；ash-leaf spots（低色素斑）；SEGA（Subependymal giant cell astrocytoma）；AML（kidney）",
    clinical: "Multiple hamartomas（brain、skin、kidney）；epilepsy；cognitive impairment",
    keypoint: "TSC1/2 → mTOR 抑制喪失 → hamartomas；ash-leaf spots；SEGA"
  },
  {
    group: "遺傳症候群", answer: "Schwannomatosis",
    gene: "SMARCB1 / LZTR1（22q11）；Four/Five-hit model（需同時失去 NF2）",
    histology: "Multiple schwannomas（spinal/cutaneous/cranial）；meningioma（5%）",
    clinical: "無 bilateral vestibular schwannoma（與 NF2 最重要區別）；慢性疼痛",
    keypoint: "Four-hit：germline SMARCB1 → LOH 22q（SMARCB1 + NF2 各喪失 1 allele）→ NF2 somatic → 成瘤"
  },
  {
    group: "遺傳症候群", answer: "McCune-Albright syndrome",
    gene: "GNAS somatic mosaic（postzygotic）；GPCR → cAMP↑；非遺傳",
    histology: "Fibrous dysplasia（多發）；café-au-lait（邊界不規則，海岸線狀）",
    clinical: "Triad：Fibrous dysplasia + Precocious puberty + Café-au-lait；GH excess；hypercortisolism",
    keypoint: "GNAS somatic mosaic（postzygotic = 非遺傳）；與 fibrous dysplasia 同 GNAS1 somatic"
  },
  {
    group: "遺傳症候群", answer: "Ollier / Maffucci（Enchondromatosis）",
    gene: "IDH1 / IDH2 somatic mosaic（postzygotic）；D-2-HG oncometabolite；非遺傳",
    histology: "Multiple enchondromas；Maffucci 額外有 spindle cell hemangioma（非 cavernous hemangioma）",
    clinical: "Ollier 較常見；可惡化為 chondrosarcoma；Not inherited（postzygotic）",
    keypoint: "Not inherited（postzygotic）；Maffucci = spindle cell hemangioma（非 cavernous）；IDH1/2 = 同 glioma/chondrosarcoma"
  },
  {
    group: "遺傳症候群", answer: "HME（Multiple Osteochondromatosis）",
    gene: "EXT1 / EXT2（AD）；Hedgehog pathway（heparan sulfate）",
    histology: "Multiple osteochondromas；growth plate outer column 失去 polarity → exostosis",
    clinical: "青少年；多發骨軟骨瘤；可惡化為 peripheral chondrosarcoma",
    keypoint: "EXT1/2（AD）= HME；peripheral chondrosarcoma 的 predisposing mutation"
  },
  {
    group: "遺傳症候群", answer: "Gardner syndrome",
    gene: "APC（or β-catenin）；FAP variant；Wnt signaling",
    histology: "Desmoid tumor（deep fibromatosis）；colorectal polyp/adenoma；osteomas；epidermoid cysts",
    clinical: "APC germline；colorectal polyp + desmoid + osteomas；FAP variant",
    keypoint: "Gardner = APC；desmoid tumor（deep fibromatosis）+ colorectal polyp"
  },
  {
    group: "遺傳症候群", answer: "HLRCC",
    gene: "FH（fumarate hydratase）germline mutation；Krebs cycle 缺陷",
    histology: "Uterine leiomyoma（良性）；cutaneous leiomyoma；aggressive RCC（papillary type 2）",
    clinical: "子宮 + 皮膚多發 leiomyoma + aggressive RCC；Leiomyoma 本身良性，RCC 侵襲性極強",
    keypoint: "FH mutation → aggressive RCC；leiomyoma 本身良性"
  },

];
