let t = 0.0;
let vel = 0.02;
let num;
let paletteSelected;
let paletteSelected1;
let paletteSelected2;
let colorMode = 1; // 控制當前的顏色型態 (1, 2, 或 3, 新增 4)
let menuContainer; 

// --- 顏色調色板定義 ---
let bgpalette =     ["#488a50",  "#bf5513", "#3b6fb6", "#4f3224", "#9a7f6e","#1c3560", '#4a4e69',"#333","#413e49","#5da4a9"];
let palettes = [
    ["#e9dbce", "#ea526f", "#fceade", "#e2c290", "#6b2d5c", "#25ced1"],
    ["#e9dbce", "#d77a61", "#223843", "#eff1f3", "#dbd3d8", "#d8b4a0"],
    ["#e29578", "#006d77", "#83c5be", "#ffddd2", "#edf6f9"],
    ["#e9dbce", "#cc3528", "#028090", "#00a896", "#f8c522"],
    ["#e9dbce", "#92accc", "#f8f7c1", "#f46902", "#da506a", "#fae402"],
    ["#e42268", "#fb8075", "#761871", "#5b7d9c", "#a38cb4", "#476590"],
    ['#f9b4ab', '#679186', '#fdebd3', '#264e70', '#bbd4ce'],
    ['#1f306e', '#c7417b', '#553772', '#8f3b76', '#f5487f'],
    ['#e0f0ea', '#95adbe', '#574f7d', '#503a65', '#3c2a4d'],
    ['#413e4a', '#b38184', '#73626e', '#f0b49e', '#f7e4be'],
    ['#ff4e50', '#fc913a', '#f9d423', '#ede574', '#e1f5c4'],
    ['#99b898', '#fecea8', '#ff847c', '#e84a5f', '#2a363b'],
    ['#69d2e7', '#a7dbd8', '#e0e4cc', '#f38630', '#fa6900'],
    ['#fe4365', '#fc9d9a', '#f9cdad', '#c8c8a9', '#83af9b'],
    ['#ecd078', '#d95b43', '#c02942', '#542437', '#53777a'],
    ['#556270', '#4ecdc4', '#c7f464', '#ff6b6b', '#c44d58'],
    ['#774f38', '#e08e79', '#f1d4af', '#ece5ce', '#c5e0dc'],
    ['#e8ddcb', '#cdb380', '#036564', '#033649', '#031634'],
    ['#490a3d', '#bd1550', '#e97f02', '#f8ca00', '#8a9b0f'],
    ['#594f4f', '#9de0ad', '#547980', '#45ada8', '#e5fcc2'],
    ['#00a0b0', '#cc333f', '#6a4a3c', '#eb6841', '#edc951'],
    ['#5bc0eb', '#fde74c', '#9bc53d', '#e55934', '#fa7921'],
    ['#ed6a5a', '#9bc1bc', '#f4f1bb', '#5ca4a9', '#e6ebe0'],
    ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c'],
    ['#22223b', '#c9ada7', '#4a4e69', '#9a8c98', '#f2e9e4'],
    ['#114b5f', '#1a936f', '#88d498', '#c6dabf', '#f3e9d2'],
    ['#3d5a80', '#98c1d9', '#e0fbfc', '#ee6c4d', '#293241'],
    ['#06aed5', '#f0c808', '#086788', '#fff1d0', '#dd1c1a'],
    ['#540d6e', '#ee4266', '#ffd23f', '#3bceac', '#0ead69'],
    ['#c9cba3', '#e26d5c', '#ffe1a8', '#723d46', '#472d30'],
    ["#3c4cad", "#5FB49C", "#e8a49c"],
    ["#1c3560", "#ff6343", "#f2efdb", "#fea985"],
    ["#e0d7c5", "#488a50", "#b59a55", "#bf5513", "#3b6fb6", "#4f3224", "#9a7f6e"], //o-ball
    ["#DEEFB7", "#5FB49C", "#ed6a5a"],
    ["#2B2B2B", "#91B3E1", "#2F5FB3", "#3D4B89", "#AE99E8", "#DBE2EC"], //clipper_tea.snore&peace.
    ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
    ["#A8C25D", "#5B7243", "#FFA088", "#FFFB42", "#a9cff0", "#2D6EA6"], //2025/07/08
    ["#F9F9F1",  "#191A18","#E15521", "#3391CF", "#E4901C", "#F5B2B1", "#009472"],//reference :: @posterlad :: https://x.com/posterlad/status/1963188864446566493
    // --- 新增：夢幻、曝光高調色板 ---
    ['#F4EDF5', '#E0BBE4', '#957DAD', '#D291BC', '#FFC7B0', '#FFD8BE', '#FFF0E0'], // 柔和紫粉調
    ['#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#00BCD4', '#00ACC1', '#0097A7'], // 冰藍色調
    ['#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835'], // 明亮黃色調
    ['#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60'], // 甜美粉色調
    ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047']  // 清新綠色調
];


// --- 選單和顏色控制函數 ---

/**
 * 根據當前的 colorMode 設置調色板組。
 */
function setPalettes() {
    randomSeed(num);
    
    if (colorMode === 1) {
        paletteSelected = palettes[0];
        paletteSelected1 = palettes[1];
        paletteSelected2 = palettes[2];
    } else if (colorMode === 2) {
        paletteSelected = palettes[7];
        paletteSelected1 = palettes[11];
        paletteSelected2 = palettes[14];
    } else if (colorMode === 3) {
        paletteSelected = palettes[27];
        paletteSelected1 = palettes[30];
        paletteSelected2 = palettes[35];
    } else if (colorMode === 4) { // 新增：夢幻高曝光模式
        // 從新添加的夢幻調色板中選擇
        paletteSelected = random([palettes[palettes.length - 5], palettes[palettes.length - 4], palettes[palettes.length - 3]]);
        paletteSelected1 = random([palettes[palettes.length - 5], palettes[palettes.length - 4], palettes[palettes.length - 3], palettes[palettes.length - 2]]);
        paletteSelected2 = random([palettes[palettes.length - 5], palettes[palettes.length - 4], palettes[palettes.length - 3], palettes[palettes.length - 2], palettes[palettes.length - 1]]);
    }
    
    // 每次切換作品模式時，隨機打亂這些選中的調色板，確保初始顏色多樣性
    shuffle(paletteSelected, true);
    shuffle(paletteSelected1, true);
    shuffle(paletteSelected2, true);
    shuffle(bgpalette,true); // 背景調色板也繼續打亂
    
    redraw();
}

/**
 * 點擊選單選項時調用，改變 colorMode
 * @param {number} mode 新的顏色型態 (1, 2, 3 或 4)
 */
function changeColorMode(mode) {
    colorMode = mode;
    
    // 處理按鈕 'active' 狀態
    let buttons = menuContainer.elt.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    document.getElementById(`mode-${mode}`).classList.add('active');

    setPalettes();
}


/**
 * 點擊滑鼠時，隨機打亂當前所有的顏色調色板。
 */
function mouseClicked() {
    // 每次點擊滑鼠，打亂三個調色板的順序
    shuffle(paletteSelected, true);
    shuffle(paletteSelected1, true);
    shuffle(paletteSelected2, true);
    // 打亂背景調色板的順序
    shuffle(bgpalette,true);

    redraw(); // 觸發重繪
}

/**
 * 隨機獲取用於線條和點的顏色
 * @returns {p5.Color} 顏色物件
 */
function randomCol(){
    // 從索引 1 到底之間隨機選取，排除第一個顏色 (通常作為主要背景/次要色)
    let randoms = int(random(1,paletteSelected.length)); 
    return color(paletteSelected[randoms]);
 }

/**
 * 隨機獲取背景色
 * @returns {p5.Color} 顏色物件
 */
function bgCol(){
    let randoms = int(random(0,bgpalette.length));
    return color(bgpalette[randoms]);
 }

/**
 * 繪製從兩個漸變調色板中隨機選取的兩種顏色所創建的漸變。
 */
function gradient(r) {
    // 從各自的調色板中隨機選取兩種顏色
    col1 = random(paletteSelected1);
    col2 = random(paletteSelected2);

    noStroke();
    let gradientFill = drawingContext.createLinearGradient(0, -r, 0, r);
    gradientFill.addColorStop(0, color(col1));
    gradientFill.addColorStop(1, color(col2));
    drawingContext.fillStyle = gradientFill;
}


/**
 * 創建並設置左側選單 (使用 p5.DOM)
 */
function createMenu() {
    menuContainer = createDiv('');
    menuContainer.id('menu-controls');

    menuContainer.style('height', '100%');
    menuContainer.style('width', '100px');
    menuContainer.style('position', 'fixed');
    menuContainer.style('top', '0');
    menuContainer.style('left', '-100px'); 
    menuContainer.style('background-color', 'rgba(255, 255, 0, 0.5)'); 
    menuContainer.style('transition', 'left 0.3s ease'); 
    menuContainer.style('z-index', '100'); 
    menuContainer.style('padding-top', '50px');
    menuContainer.style('text-align', 'center');

    const subMenus = [
        { id: 'mode-1', label: '作品一', mode: 1 },
        { id: 'mode-2', label: '作品二', mode: 2 },
        { id: 'mode-3', label: '作品三', mode: 3 },
        { id: 'mode-4', label: '作品四', mode: 4 } // 新增作品四按鈕
    ];

    for (const item of subMenus) {
        let btn = createButton(item.label);
        btn.id(item.id);
        btn.parent(menuContainer); 
        
        btn.mousePressed(() => changeColorMode(item.mode));
        
        btn.style('display', 'block');
        btn.style('width', '100%');
        btn.style('margin-bottom', '20px');
        btn.style('padding', '10px 0');
        btn.style('font-size', '20px');
        btn.style('background', 'none');
        btn.style('border', 'none');
        btn.style('cursor', 'pointer');
        btn.style('color', 'black'); 
        btn.style('transition', 'color 0.2s');
    }

    document.getElementById(`mode-${colorMode}`).classList.add('active');
}


// --- 核心 p5.js 函數 ---

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(2)
    angleMode(DEGREES);
    num = random(100000);
    
    createMenu(); 
    setPalettes();
    
    noLoop(); 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}

function draw() {
    randomSeed(num);
    background(bgCol())
    stroke(paletteSelected.length > 1 ? paletteSelected[1] : "#000000");
    circlePacking() 
}

// --- 滑動選單的 MouseMove 邏輯 ---
function mouseMoved() {
    if (mouseX < 100) {
        menuContainer.style('left', '0px');
    } else {
        menuContainer.style('left', '-100px');
    }
}


// --- 繪圖邏輯函數 (主體放大到 45%) ---
function circlePacking() {
    push();
    translate(width / 2, height / 2)
    let points = [];
    let count = 2000; 
    
    for (let i = 0; i < count; i++) {
        let a = random(360);
        let d = random(min(width, height) * 0.45); 
        let s = random(200); 
        let x = cos(a) * (d - s / 2);
        let y = sin(a) * (d - s / 2);
        let add = true;
        for (let j = 0; j < points.length; j++){
            let p = points[j];
            if (dist(x, y, p.x, p.y) < (s + p.z) * 0.6) {
                add = false; 
                break;
            }
        }
        if (add) points.push(createVector(x, y, s));
    }
    
    for (let i = 0; i < points.length; i++) {
        let p = points[i];
        let rot = random(360); 
        push();
        translate(p.x, p.y); 
        rotate(rot); 
        blendMode(OVERLAY)
        let r = p.z - 5; 
        gradient(r) 
        shape(0, 0, r)
        pop();
    }
    pop();
}

function shape(x, y, r) {
    push();
    noStroke();
    translate(x, y);
    let radius = r; 
    let nums = 8 
    for (let i = 0; i < 360; i += 360 / nums) {
        let ex = radius * sin(i);
        let ey = radius * cos(i);
        push();
        translate(ex,ey)
        rotate(atan2(ey, ex)) 
        distortedCircle(0, 0, r * 0.5); 
        pop();
        stroke(randomCol()) 
        strokeWeight(0.5)
        line(0,0,ex,ey)
        ellipse(ex,ey,2)
    }
    pop();
}

function distortedCircle(x, y, r) {
    push();
    translate(x, y)
    let p1 = createVector(0, -r / 2);
    let p2 = createVector(r / 2, 0);
    let p3 = createVector(0, r / 2);
    let p4 = createVector(-r / 2, 0)
    let val = 0.3;
    let random_a8_1 = random(-r * val, r * val)
    let random_a2_3 = random(-r * val, r * val)
    let random_a4_5 = random(-r * val, r * val)
    let random_a6_7 = random(-r * val, r * val)
    let ran_anker_lenA = r * random(0.2, 0.5)
    let ran_anker_lenB = r * random(0.2, 0.5)
    let a1 = createVector(ran_anker_lenA, -r / 2 + random_a8_1);
    let a2 = createVector(r / 2 + random_a2_3, -ran_anker_lenB);
    let a3 = createVector(r / 2 - random_a2_3, ran_anker_lenA);
    let a4 = createVector(ran_anker_lenB, r / 2 + random_a4_5);
    let a5 = createVector(-ran_anker_lenA, r / 2 - random_a4_5);
    let a6 = createVector(-r / 2 + random_a6_7, ran_anker_lenB);
    let a7 = createVector(-r / 2 - random_a6_7, -ran_anker_lenA);
    let a8 = createVector(-ran_anker_lenB, -r / 2 - random_a8_1);
    beginShape();
    vertex(p1.x, p1.y);
    bezierVertex(a1.x, a1.y, a2.x, a2.y, p2.x, p2.y)
    bezierVertex(a3.x, a3.y, a4.x, a4.y, p3.x, p3.y)
    bezierVertex(a5.x, a5.y, a6.x, a6.y, p4.x, p4.y)
    bezierVertex(a7.x, a7.y, a8.x, a8.y, p1.x, p1.y) 
    endShape(CLOSE);
    pop();
}