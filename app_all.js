// ===== 食物热量数据库 =====
var FOOD_DATABASE = [
  { name: '白米饭', calories: 116, unit: '碗(150g)', category: '主食' },
  { name: '糙米饭', calories: 112, unit: '碗(150g)', category: '主食' },
  { name: '小米粥', calories: 46, unit: '碗(250g)', category: '主食' },
  { name: '白粥', calories: 46, unit: '碗(250g)', category: '主食' },
  { name: '馒头', calories: 223, unit: '个(100g)', category: '主食' },
  { name: '花卷', calories: 211, unit: '个(100g)', category: '主食' },
  { name: '面条(煮)', calories: 110, unit: '碗(150g)', category: '主食' },
  { name: '方便面', calories: 472, unit: '包(100g)', category: '主食' },
  { name: '全麦面包', calories: 80, unit: '片(40g)', category: '主食' },
  { name: '白面包', calories: 106, unit: '片(40g)', category: '主食' },
  { name: '玉米', calories: 112, unit: '根(200g)', category: '主食' },
  { name: '红薯', calories: 86, unit: '个(200g)', category: '主食' },
  { name: '土豆', calories: 76, unit: '个(150g)', category: '主食' },
  { name: '燕麦片', calories: 147, unit: '碗(40g)', category: '主食' },
  { name: '油条', calories: 184, unit: '根(80g)', category: '主食' },
  { name: '饺子', calories: 40, unit: '个(20g)', category: '主食' },
  { name: '包子(肉)', calories: 180, unit: '个(80g)', category: '主食' },
  { name: '烧饼', calories: 260, unit: '个(100g)', category: '主食' },
  { name: '粽子', calories: 195, unit: '个(150g)', category: '主食' },
  { name: '年糕', calories: 154, unit: '块(100g)', category: '主食' },
  { name: '鸡蛋(煮)', calories: 72, unit: '个(50g)', category: '蛋奶' },
  { name: '鸡蛋(煎)', calories: 90, unit: '个(50g)', category: '蛋奶' },
  { name: '鸡蛋(炒)', calories: 110, unit: '个(50g)', category: '蛋奶' },
  { name: '鸭蛋', calories: 114, unit: '个(60g)', category: '蛋奶' },
  { name: '全脂牛奶', calories: 163, unit: '杯(250ml)', category: '蛋奶' },
  { name: '脱脂牛奶', calories: 88, unit: '杯(250ml)', category: '蛋奶' },
  { name: '酸奶(原味)', calories: 72, unit: '杯(100g)', category: '蛋奶' },
  { name: '奶酪', calories: 66, unit: '片(20g)', category: '蛋奶' },
  { name: '豆浆', calories: 42, unit: '杯(250ml)', category: '蛋奶' },
  { name: '豆奶', calories: 54, unit: '杯(250ml)', category: '蛋奶' },
  { name: '鸡胸肉', calories: 133, unit: '份(100g)', category: '肉类' },
  { name: '鸡腿肉', calories: 181, unit: '份(100g)', category: '肉类' },
  { name: '鸡翅', calories: 97, unit: '个(50g)', category: '肉类' },
  { name: '鸡爪', calories: 254, unit: '份(100g)', category: '肉类' },
  { name: '猪肉(瘦肉)', calories: 143, unit: '份(100g)', category: '肉类' },
  { name: '猪肉(五花)', calories: 395, unit: '份(100g)', category: '肉类' },
  { name: '猪排骨', calories: 264, unit: '份(100g)', category: '肉类' },
  { name: '猪蹄', calories: 260, unit: '份(100g)', category: '肉类' },
  { name: '猪肝', calories: 129, unit: '份(100g)', category: '肉类' },
  { name: '牛肉(瘦)', calories: 106, unit: '份(100g)', category: '肉类' },
  { name: '牛肉(肥牛)', calories: 250, unit: '份(100g)', category: '肉类' },
  { name: '牛腩', calories: 190, unit: '份(100g)', category: '肉类' },
  { name: '羊肉', calories: 203, unit: '份(100g)', category: '肉类' },
  { name: '羊肉串', calories: 75, unit: '串(30g)', category: '肉类' },
  { name: '腊肉', calories: 498, unit: '份(100g)', category: '肉类' },
  { name: '火腿肠', calories: 106, unit: '根(50g)', category: '肉类' },
  { name: '培根', calories: 108, unit: '片(20g)', category: '肉类' },
  { name: '香肠', calories: 188, unit: '根(75g)', category: '肉类' },
  { name: '草鱼', calories: 113, unit: '份(100g)', category: '水产' },
  { name: '鲈鱼', calories: 105, unit: '份(100g)', category: '水产' },
  { name: '三文鱼', calories: 139, unit: '份(100g)', category: '水产' },
  { name: '带鱼', calories: 127, unit: '份(100g)', category: '水产' },
  { name: '虾', calories: 93, unit: '份(100g)', category: '水产' },
  { name: '螃蟹', calories: 95, unit: '份(100g)', category: '水产' },
  { name: '蛤蜊', calories: 62, unit: '份(100g)', category: '水产' },
  { name: '鱿鱼', calories: 92, unit: '份(100g)', category: '水产' },
  { name: '豆腐(嫩)', calories: 62, unit: '块(150g)', category: '豆制品' },
  { name: '豆腐(老)', calories: 81, unit: '块(150g)', category: '豆制品' },
  { name: '豆腐干', calories: 140, unit: '份(100g)', category: '豆制品' },
  { name: '腐竹', calories: 230, unit: '份(50g)', category: '豆制品' },
  { name: '千张', calories: 260, unit: '份(100g)', category: '豆制品' },
  { name: '毛豆', calories: 131, unit: '份(100g)', category: '豆制品' },
  { name: '黄豆', calories: 195, unit: '份(50g)', category: '豆制品' },
  { name: '白菜', calories: 13, unit: '份(100g)', category: '蔬菜' },
  { name: '菠菜', calories: 23, unit: '份(100g)', category: '蔬菜' },
  { name: '西兰花', calories: 34, unit: '份(100g)', category: '蔬菜' },
  { name: '生菜', calories: 15, unit: '份(100g)', category: '蔬菜' },
  { name: '番茄', calories: 27, unit: '个(150g)', category: '蔬菜' },
  { name: '黄瓜', calories: 24, unit: '根(150g)', category: '蔬菜' },
  { name: '胡萝卜', calories: 41, unit: '根(100g)', category: '蔬菜' },
  { name: '茄子', calories: 25, unit: '份(100g)', category: '蔬菜' },
  { name: '青椒', calories: 20, unit: '个(80g)', category: '蔬菜' },
  { name: '豆角', calories: 31, unit: '份(100g)', category: '蔬菜' },
  { name: '莲藕', calories: 73, unit: '份(100g)', category: '蔬菜' },
  { name: '冬瓜', calories: 12, unit: '份(200g)', category: '蔬菜' },
  { name: '南瓜', calories: 26, unit: '份(200g)', category: '蔬菜' },
  { name: '蘑菇', calories: 22, unit: '份(100g)', category: '蔬菜' },
  { name: '木耳', calories: 11, unit: '份(50g)', category: '蔬菜' },
  { name: '海带', calories: 6, unit: '份(50g)', category: '蔬菜' },
  { name: '紫菜', calories: 2, unit: '份(10g)', category: '蔬菜' },
  { name: '苹果', calories: 95, unit: '个(200g)', category: '水果' },
  { name: '香蕉', calories: 105, unit: '根(120g)', category: '水果' },
  { name: '橙子', calories: 62, unit: '个(150g)', category: '水果' },
  { name: '橘子', calories: 50, unit: '个(100g)', category: '水果' },
  { name: '西瓜', calories: 60, unit: '片(200g)', category: '水果' },
  { name: '葡萄', calories: 69, unit: '串(100g)', category: '水果' },
  { name: '草莓', calories: 32, unit: '份(100g)', category: '水果' },
  { name: '蓝莓', calories: 57, unit: '份(100g)', category: '水果' },
  { name: '猕猴桃', calories: 61, unit: '个(100g)', category: '水果' },
  { name: '桃子', calories: 50, unit: '个(150g)', category: '水果' },
  { name: '梨', calories: 51, unit: '个(200g)', category: '水果' },
  { name: '芒果', calories: 60, unit: '个(200g)', category: '水果' },
  { name: '菠萝', calories: 41, unit: '份(150g)', category: '水果' },
  { name: '哈密瓜', calories: 34, unit: '片(200g)', category: '水果' },
  { name: '火龙果', calories: 55, unit: '个(200g)', category: '水果' },
  { name: '荔枝', calories: 66, unit: '个(30g)', category: '水果' },
  { name: '龙眼', calories: 60, unit: '个(30g)', category: '水果' },
  { name: '樱桃', calories: 46, unit: '份(100g)', category: '水果' },
  { name: '可口可乐', calories: 140, unit: '罐(330ml)', category: '饮品' },
  { name: '雪碧', calories: 140, unit: '罐(330ml)', category: '饮品' },
  { name: '奶茶', calories: 300, unit: '杯(500ml)', category: '饮品' },
  { name: '奶茶(无糖)', calories: 150, unit: '杯(500ml)', category: '饮品' },
  { name: '拿铁咖啡', calories: 170, unit: '杯(350ml)', category: '饮品' },
  { name: '美式咖啡', calories: 15, unit: '杯(350ml)', category: '饮品' },
  { name: '卡布奇诺', calories: 150, unit: '杯(350ml)', category: '饮品' },
  { name: '橙汁', calories: 112, unit: '杯(250ml)', category: '饮品' },
  { name: '啤酒', calories: 150, unit: '瓶(500ml)', category: '饮品' },
  { name: '红酒', calories: 125, unit: '杯(150ml)', category: '饮品' },
  { name: '薯片', calories: 270, unit: '包(50g)', category: '零食' },
  { name: '巧克力', calories: 220, unit: '块(40g)', category: '零食' },
  { name: '饼干', calories: 225, unit: '包(50g)', category: '零食' },
  { name: '蛋糕', calories: 350, unit: '块(100g)', category: '零食' },
  { name: '冰淇淋', calories: 150, unit: '球(60g)', category: '零食' },
  { name: '薯条', calories: 220, unit: '份(80g)', category: '零食' },
  { name: '坚果', calories: 280, unit: '把(30g)', category: '零食' },
  { name: '牛肉干', calories: 165, unit: '袋(50g)', category: '零食' },
  { name: '辣条', calories: 140, unit: '包(30g)', category: '零食' },
  { name: '月饼', calories: 400, unit: '个(100g)', category: '零食' },
  { name: '番茄炒蛋', calories: 150, unit: '份(200g)', category: '菜肴' },
  { name: '麻婆豆腐', calories: 180, unit: '份(200g)', category: '菜肴' },
  { name: '宫保鸡丁', calories: 320, unit: '份(200g)', category: '菜肴' },
  { name: '鱼香肉丝', calories: 280, unit: '份(200g)', category: '菜肴' },
  { name: '水煮鱼', calories: 350, unit: '份(300g)', category: '菜肴' },
  { name: '红烧肉', calories: 480, unit: '份(200g)', category: '菜肴' },
  { name: '糖醋排骨', calories: 380, unit: '份(200g)', category: '菜肴' },
  { name: '回锅肉', calories: 400, unit: '份(200g)', category: '菜肴' },
  { name: '清蒸鱼', calories: 140, unit: '份(200g)', category: '菜肴' },
  { name: '白灼虾', calories: 120, unit: '份(200g)', category: '菜肴' },
  { name: '炒青菜', calories: 60, unit: '份(200g)', category: '菜肴' },
  { name: '地三鲜', calories: 220, unit: '份(200g)', category: '菜肴' },
  { name: '酸辣土豆丝', calories: 160, unit: '份(200g)', category: '菜肴' },
  { name: '蛋炒饭', calories: 420, unit: '份(300g)', category: '菜肴' },
  { name: '扬州炒饭', calories: 450, unit: '份(300g)', category: '菜肴' },
  { name: '炒面', calories: 400, unit: '份(300g)', category: '菜肴' },
  { name: '凉皮', calories: 220, unit: '份(250g)', category: '菜肴' },
  { name: '麻辣烫', calories: 350, unit: '份(300g)', category: '菜肴' },
  { name: '沙拉酱', calories: 100, unit: '勺(15g)', category: '酱料' },
  { name: '花生酱', calories: 95, unit: '勺(15g)', category: '酱料' },
  { name: '蜂蜜', calories: 60, unit: '勺(20g)', category: '酱料' }
]



const MEAL_TYPES = [
  { key: "breakfast", label: "早餐", icon: "🌅" },
  { key: "lunch", label: "午餐", icon: "☀️" },
  { key: "dinner", label: "晚餐", icon: "🌙" },
  { key: "snack", label: "加餐", icon: "🍪" }
]
const TYPE_KEYS = ["breakfast","lunch","dinner","snack"]
const TYPE_LABELS = ["早餐","午餐","晚餐","加餐"]

function todayStr() {
  const d=new Date(); const p=n=>String(n).padStart(2,"0")
  return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`
}
function fmtDate(d) {
  const p=n=>String(n).padStart(2,"0")
  return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`
}
function fmtDisplay(s) {
  const p=s.split("-"); return `${p[1]}月${p[2]}日`
}
function fmtWeekday(s) {
  return ["周日","周一","周二","周三","周四","周五","周六"][new Date(s).getDay()]
}
function daysInMonth(y,m) { return new Date(y,m,0).getDate() }
function monthCal(y,m) {
  const d=daysInMonth(y,m),f=new Date(y,m-1,1).getDay(),c=[]
  for(let i=0;i<f;i++) c.push(null)
  for(let i=1;i<=d;i++) c.push(i)
  return c
}
function gds(ds) {
  try { return JSON.parse(localStorage.getItem("day_"+ds))||{meals:[]} }
  catch { return {meals:[]} }
}
function sds(ds,d) { localStorage.setItem("day_"+ds,JSON.stringify(d)) }
function gst() {
  try { return JSON.parse(localStorage.getItem("settings"))||{} }
  catch { return {} }
}
function sst(s) { const c=gst(); Object.assign(c,s); localStorage.setItem("settings",JSON.stringify(c)) }
function gid() { return Date.now().toString(36)+Math.random().toString(36).substr(2,5) }

function streak() {
  let s=0; const t=new Date()
  for(let i=0;i<365;i++) {
    const d=new Date(t); d.setDate(d.getDate()-i)
    if((gds(fmtDate(d)).meals||[]).length>0) s++; else if(i>0) break
  }
  return s
}
function monthStats(y,m) {
  const d=daysInMonth(y,m); let lg=0,tc=0
  for(let i=1;i<=d;i++) {
    const ds=`${y}-${String(m).padStart(2,"0")}-${String(i).padStart(2,"0")}`
    const dd=gds(ds)
    if(dd.meals&&dd.meals.length>0) { lg++; tc+=dd.meals.reduce((s,m)=>s+(m.calories||0),0) }
  }
  return {loggedDays:lg,totalDays:d,totalCalories:tc}
}
function sf(q,lim) {
  if(!q||q.trim().length<1) return []; lim=lim||8
  const kw=q.trim().toLowerCase().split(/[\s,，、]+/).filter(k=>k.length>0)
  return FOOD_DATABASE.map(f=>{
    const n=f.name.toLowerCase(); let sc=0,al=true
    for(const k of kw) {
      const idx=n.indexOf(k)
      if(idx===0) sc+=100-k.length*2; else if(idx>0) sc+=50; else { al=false; break }
    }
    if(n===q) sc+=50
    return al?{...f,sc}:null
  }).filter(Boolean).sort((a,b)=>b.sc-a.sc).slice(0,lim).map(({sc,...f})=>f)
}
function mealSug(goal) {
  return {breakfast:Math.round(goal*0.3),lunch:Math.round(goal*0.4),dinner:Math.round(goal*0.25),snack:Math.round(goal*0.05)}
}
function mealCheck(meals,goal,type) {
  const sug=mealSug(goal),tm=meals.filter(m=>m.type===type),cur=tm.reduce((s,m)=>s+(m.calories||0),0),su=sug[type]||0
  return {current:cur,suggested:su,remaining:Math.max(0,su-cur),excess:cur>su}
}
function getTypeLabel(key){const t=MEAL_TYPES.find(m=>m.key===key);return t?t.label:key}

// ===== State =====
let state={tab:0,year:2026,month:7,selectedDate:""}
let app={foodInput:"",calInput:"",typeIdx:0,editId:"",searchResults:[],showSearch:false,modal:"",overLimit:false,overLimitAmount:0}

function initDemo() {
  if(localStorage.getItem("_init")) return
  const t=todayStr()
  const sds2=(ds,d)=>{localStorage.setItem("day_"+ds,JSON.stringify(d))}
  const m=(t,f,c)=>({id:gid(),type:t,food:f,calories:c,time:new Date().toTimeString().slice(0,5)})
  sds2(t,{meals:[
    m("breakfast","鸡蛋",72),m("breakfast","全麦面包",160),
    m("lunch","番茄炒蛋",150),m("lunch","白米饭",116),m("lunch","西兰花炒虾仁",130),
    m("snack","苹果",95),m("dinner","清蒸鱼",140),m("dinner","炒青菜",60)
  ],weight:65.5})
  for(let i=1;i<=4;i++){
    const ds=fmtDate(new Date(Date.now()-i*86400000)),d=gds(ds)
    if(!d.meals||d.meals.length===0){
      d.meals=[m("breakfast","牛奶",163),m("lunch","白米饭",116),m("lunch","鸡胸肉",133),m("dinner","红薯",86)]
      sds2(ds,d)
    }
  }
  sst({calorieGoal:1500,remindTime:"10:30",remindEnabled:true})
  localStorage.setItem("_init","1")
}

// ===== Toast & Dialog =====
function showToast(msg,icon){
  const el=document.getElementById("toast")
  el.innerHTML=(icon||"")+" "+msg; el.className="toast show"
  clearTimeout(el._t); el._t=setTimeout(()=>el.className="toast",2000)
}
function showDialog(title,msg,cb){
  document.getElementById("dialogOverlay").style.display="block"
  document.getElementById("dialogBox").style.display="block"
  document.getElementById("dialogTitle").textContent=title
  document.getElementById("dialogMsg").textContent=msg
  document.getElementById("dialogConfirm").onclick=()=>{hideDialog();if(cb)cb()}
  document.getElementById("dialogCancel").onclick=hideDialog
}
function hideDialog(){
  document.getElementById("dialogOverlay").style.display="none"
  document.getElementById("dialogBox").style.display="none"
}

// ===== Tab =====
function switchTab(idx) {
  state.tab=idx
  document.querySelectorAll(".tab-item").forEach((t,i)=>t.classList.toggle("active",i===idx))
  document.querySelectorAll(".page").forEach((p,i)=>p.classList.toggle("active",i===idx))
  const titles=["今日打卡","打卡记录","设置"]
  document.getElementById("navTitle").textContent=titles[idx]
  if(idx===0) renderHome()
  if(idx===1) renderRecord()
  if(idx===2) renderSettings()
}

// ===== Home =====
function renderHome() {
  const t=todayStr(), d=gds(t), st=gst()
  const meals=(d.meals||[]).sort((a,b)=>a.time.localeCompare(b.time))
  const goal=st.calorieGoal||1500
  const tc=meals.reduce((s,m)=>s+(m.calories||0),0)
  const pct=goal>0?Math.round((tc/goal)*100):0
  const ol=tc>goal, ola=tc-goal
  app.overLimit=ol; app.overLimitAmount=ola

  let status=""
  if(tc===0) status="今天还没有记录饮食，记得按时吃饭哦～"
  else if(ol) status="⚠️ 已超过目标 "+ola+" kcal，注意控制！"
  else if(pct<30) status="热量摄入还比较低，记得补充营养"
  else status="接近目标热量，还剩 "+(goal-tc)+" kcal"

  document.getElementById("hDate").textContent=fmtDisplay(t)
  document.getElementById("hWeekday").textContent=fmtWeekday(t)
  document.getElementById("hStreak").textContent=streak()
  document.getElementById("calNum").textContent=tc.toLocaleString()
  document.getElementById("calGoal").textContent=goal.toLocaleString()
  document.getElementById("calBar").style.width=Math.min(pct,100)+"%"
  document.getElementById("calBar").style.background=ol?"linear-gradient(90deg,#FF5722,#f44336)":"linear-gradient(90deg,#4CAF50,#81C784)"
  document.getElementById("calNum").style.color=ol?"#f44336":"#4CAF50"
  document.getElementById("calStatus").textContent=status
  document.getElementById("warnBanner").style.display=ol?"flex":"none"
  if(ol) document.getElementById("warnAmount").textContent=ola

  const listEl=document.getElementById("mealList")
  if(meals.length===0){
    listEl.innerHTML='<div class="empty-state"><div style="font-size:40px;margin-bottom:8px;">🍽️</div><div>还没有记录今天的饮食</div><div style="font-size:12px;color:#bbb;margin-top:4px;">点击上方按钮添加今天的第一餐吧</div></div>'
  } else {
    listEl.innerHTML=meals.map(m=>
      `<div class="meal-item" onclick="editMeal('${m.id}')">
        <div class="meal-info">
          <span class="tag tag-${m.type}">${getTypeLabel(m.type)}</span>
          <span class="meal-name">${m.food}</span>
          <span class="meal-time">${m.time}</span>
        </div>
        <span class="meal-cal">${m.calories}<span class="meal-cal-unit">kcal</span></span>
        <span class="meal-del" onclick="event.stopPropagation();deleteMeal('${m.id}')">✕</span>
      </div>`
    ).join("")
  }

  const wEl=document.getElementById("weightDisplay")
  if(d.weight){
    wEl.innerHTML='<span style="font-size:16px;font-weight:600;color:#333">'+d.weight+' kg</span>'
  } else {
    wEl.innerHTML='<span style="font-size:13px;color:#bbb">点击记录今日体重</span>'
  }
}

// ===== Quick Add & Modal =====
function quickAdd(type) {
  app.typeIdx=TYPE_KEYS.indexOf(type); app.foodInput=""; app.calInput=""; app.searchResults=[]; app.showSearch=false
  openModal()
}
function openAdd() {
  app.typeIdx=0; app.foodInput=""; app.calInput=""; app.searchResults=[]; app.showSearch=false
  openModal()
}
function openModal() {
  document.getElementById("modalOverlay").style.display="block"
  document.getElementById("modalBox").style.display="block"
  renderAddModal()
}
function closeModal() {
  document.getElementById("modalOverlay").style.display="none"
  document.getElementById("modalBox").style.display="none"
}

function renderAddModal() {
  const st=gst(), goal=st.calorieGoal||1500
  const tkey=TYPE_KEYS[app.typeIdx], meals=gds(todayStr()).meals||[]
  const chk=mealCheck(meals,goal,tkey)
  document.getElementById("modalTitle").textContent="添加食物"
  document.getElementById("modalSaveBtn").style.display="block"
  document.getElementById("modalSaveBtn").textContent="保存记录"
  document.getElementById("modalSaveBtn").onclick=saveMeal

  let html=`
    <div class="form-group">
      <label class="form-label">餐次</label>
      <select class="form-select" id="mType" onchange="app.typeIdx=parseInt(this.value);renderAddModal()">
        ${TYPE_LABELS.map((l,i)=>`<option value="${i}"${i===app.typeIdx?" selected":""}>${l}</option>`).join("")}
      </select>
    </div>
    <div class="meal-suggestion">${TYPE_LABELS[app.typeIdx]}建议摄入 <strong>${chk.suggested}</strong> kcal${chk.current>0?`<br>已记录 ${chk.current} kcal，还可加 <strong>${chk.remaining}</strong> kcal`:""}</div>
    <div class="form-group" style="position:relative">
      <label class="form-label">食物名称</label>
      <input class="form-input" id="foodInput" placeholder="输入食物名称，自动匹配热量" value="${app.foodInput}" autocomplete="off">
      <div class="search-results" id="searchResults" style="display:${app.showSearch?"block":"none"}">${app.showSearch?app.searchResults.map((f,i)=>
        `<div class="search-item" onclick="selectFood(${i})">
          <div><div class="search-name">${f.name}</div><div class="search-cat">${f.category}</div></div>
          <div class="search-right"><div class="search-cal">${f.calories}</div><div class="search-unit">kcal/${f.unit}</div></div>
        </div>`
      ).join(""):""}</div>
    </div>
    <div class="form-group">
      <label class="form-label">热量（千卡）</label>
      <input class="form-input" id="calInput" type="number" placeholder="自动填入或手动输入" value="${app.calInput}">
    </div>
  `
  document.getElementById("modalContent").innerHTML=html
  document.getElementById("foodInput")?.addEventListener("input",onFoodInput)
  document.getElementById("foodInput")?.addEventListener("focus",()=>{if(app.foodInput.trim().length>=1){const r=sf(app.foodInput);app.showSearch=r.length>0;updateSearchResults(r)}})
}

function onFoodInput(e) {
  app.foodInput=e.target.value
  if(app.foodInput.trim().length>=1){const r=sf(app.foodInput);app.searchResults=r;app.showSearch=r.length>0;updateSearchResults(r)}
  else {app.showSearch=false;const el=document.getElementById("searchResults");if(el)el.style.display="none"}
}
function updateSearchResults(r) {
  const el=document.getElementById("searchResults")
  if(!el) return
  if(r.length===0){el.style.display="none";return}
  el.innerHTML=r.map((f,i)=>
    `<div class="search-item" onclick="selectFood(${i})">
      <div><div class="search-name">${f.name}</div><div class="search-cat">${f.category}</div></div>
      <div class="search-right"><div class="search-cal">${f.calories}</div><div class="search-unit">kcal/${f.unit}</div></div>
    </div>`
  ).join("")
  el.style.display="block"
}
function selectFood(idx) {
  const f=app.searchResults[idx]
  if(!f) return
  app.foodInput=f.name; app.calInput=String(f.calories); app.showSearch=false
  document.getElementById("foodInput").value=f.name
  document.getElementById("calInput").value=f.calories
  const el=document.getElementById("searchResults"); if(el)el.style.display="none"
}

function saveMeal() {
  const food=app.foodInput.trim(), cal=parseInt(app.calInput)||0
  if(!food){showToast("请输入食物名称");return}
  if(cal<=0){showToast("请输入有效热量");return}
  const t=todayStr(), d=gds(t), st=gst(), goal=st.calorieGoal||1500
  const tc=(d.meals||[]).reduce((s,m)=>s+(m.calories||0),0), nt=tc+cal
  if(nt>goal){
    showDialog("⚠️ 热量超标提醒","添加「"+food+"」("+cal+"kcal)后将超过目标 "+(nt-goal)+"kcal。当前 "+tc+"/"+goal+"kcal。确定继续？",
      ()=>{_saveMeal(t,food,cal,TYPE_KEYS[app.typeIdx])})
    return
  }
  _saveMeal(t,food,cal,TYPE_KEYS[app.typeIdx])
}
function _saveMeal(t,food,cal,type) {
  const d=gds(t); if(!d.meals) d.meals=[]
  d.meals.push({id:gid(),type,food,calories:cal,time:new Date().toTimeString().slice(0,5)})
  sds(t,d); closeModal(); renderHome(); showToast("✅ 记录成功")
}

function editMeal(id) {
  const meals=(gds(todayStr()).meals||[]), m=meals.find(x=>x.id===id)
  if(!m) return
  app.editId=id; app.editFood=m.food; app.editCal=String(m.calories); app.editTypeIdx=TYPE_KEYS.indexOf(m.type)
  document.getElementById("modalOverlay").style.display="block"
  document.getElementById("modalBox").style.display="block"
  document.getElementById("modalTitle").textContent="编辑食物"
  document.getElementById("modalContent").innerHTML=`
    <div class="form-group"><label class="form-label">餐次</label>
      <select class="form-select" id="eType">${TYPE_LABELS.map((l,i)=>`<option value="${i}"${i===app.editTypeIdx?" selected":""}>${l}</option>`).join("")}</select></div>
    <div class="form-group"><label class="form-label">食物名称</label>
      <input class="form-input" id="eFood" value="${app.editFood}"></div>
    <div class="form-group"><label class="form-label">热量（千卡）</label>
      <input class="form-input" id="eCal" type="number" value="${app.editCal}"></div>
  `
  document.getElementById("modalSaveBtn").style.display="block"
  document.getElementById("modalSaveBtn").textContent="更新记录"
  document.getElementById("modalSaveBtn").onclick=()=>{
    const ef=document.getElementById("eFood")?.value.trim(), ec=parseInt(document.getElementById("eCal")?.value)||0
    if(!ef){showToast("请输入食物名称");return}
    if(ec<=0){showToast("请输入有效热量");return}
    const t=todayStr(), d=gds(t); if(!d.meals) return
    const idx=d.meals.findIndex(x=>x.id===app.editId); if(idx===-1) return
    const eti=parseInt(document.getElementById("eType")?.value)||0
    d.meals[idx]={...d.meals[idx],type:TYPE_KEYS[eti],food:ef,calories:ec}
    const nt=d.meals.reduce((s,m)=>s+(m.calories||0),0), st=gst(), goal=st.calorieGoal||1500
    if(nt>goal){
      showDialog("⚠️ 热量超标提醒","更新后总热量为 "+nt+"/"+goal+"kcal，超出 "+(nt-goal)+"kcal。确定保存？",
        ()=>{sds(t,d);closeModal();renderHome();showToast("已更新")})
      return
    }
    sds(t,d);closeModal();renderHome();showToast("已更新")
  }
}

function deleteMeal(id) {
  showDialog("确认删除","确定要删除这条记录吗？",()=>{
    const t=todayStr(), d=gds(t)
    if(!d.meals) return
    d.meals=d.meals.filter(m=>m.id!==id); sds(t,d); renderHome(); showToast("已删除")
  })
}

function openWeight() {
  const d=gds(todayStr()); app.weightInput=d.weight||""
  document.getElementById("modalOverlay").style.display="block"
  document.getElementById("modalBox").style.display="block"
  document.getElementById("modalTitle").textContent="记录体重"
  document.getElementById("modalContent").innerHTML=`
    <div class="form-group"><label class="form-label">体重（kg）</label>
      <input class="form-input" id="wInput" type="number" step="0.1" placeholder="输入您的体重" value="${app.weightInput}"></div>
  `
  document.getElementById("modalSaveBtn").style.display="block"
  document.getElementById("modalSaveBtn").textContent="保存"
  document.getElementById("modalSaveBtn").onclick=()=>{
    const w=parseFloat(document.getElementById("wInput")?.value)
    if(!w||w<=0){showToast("请输入有效体重");return}
    const t=todayStr(), d=gds(t); d.weight=w; sds(t,d); closeModal(); renderHome(); showToast("✅ 体重已记录")
  }
}

// ===== Record =====
function renderRecord() {
  const {year,month,selectedDate}=state
  document.getElementById("calTitle").textContent=year+"年"+month+"月"
  const cal=monthCal(year,month), d=daysInMonth(year,month)
  let logged={}
  for(let i=1;i<=d;i++){
    const ds=year+"-"+String(month).padStart(2,"0")+"-"+String(i).padStart(2,"0")
    const dd=gds(ds); if(dd.meals&&dd.meals.length>0) logged[i]=true
  }
  const today=new Date(), isCur=today.getFullYear()===year&&today.getMonth()+1===month, td=today.getDate()
  let html='<div class="weekday-row">'
  for(const w of["日","一","二","三","四","五","六"]) html+=`<span class="weekday-cell">${w}</span>`
  html+='</div><div class="cal-grid">'
  for(const day of cal){
    if(day===null) html+='<span class="cal-cell"></span>'
    else{
      const cls="cal-cell"+(logged[day]?" logged":"")+((isCur&&day===td)?" today":"")
      html+=`<span class="${cls}" onclick="selectDay(${day})"><span>${day}</span>${logged[day]?'<span class="dot"></span>':''}</span>`
    }
  }
  html+='</div>'
  document.getElementById("calGrid").innerHTML=html
  const ms=monthStats(year,month)
  const avg=ms.loggedDays>0?Math.round(ms.totalCalories/ms.loggedDays):0
  document.getElementById("statsHTML").innerHTML=
    `<div class="stat-item"><span class="stat-num">${ms.loggedDays}</span><span class="stat-label">打卡天数</span></div>`+
    `<div class="stat-divider"></div>`+
    `<div class="stat-item"><span class="stat-num">${ms.totalDays}</span><span class="stat-label">本月天数</span></div>`+
    `<div class="stat-divider"></div>`+
    `<div class="stat-item"><span class="stat-num">${avg.toLocaleString()}</span><span class="stat-label">日均热量</span></div>`
  if(selectedDate){
    const dd=gds(selectedDate), meals=(dd.meals||[]).sort((a,b)=>a.time.localeCompare(b.time))
    let dh='<div class="section-title" style="margin-bottom:10px">'+fmtDisplay(selectedDate)+" "+fmtWeekday(selectedDate)+" 饮食</div>"
    if(meals.length===0) dh+='<div class="empty-state"><div>当天没有饮食记录</div></div>'
    else meals.forEach(m=>{dh+=`<div class="meal-item" style="padding:10px 0"><div class="meal-info"><span class="tag tag-${m.type}">${getTypeLabel(m.type)}</span><span class="meal-name">${m.food}</span><span class="meal-time">${m.time}</span></div><span class="meal-cal">${m.calories}</span></div>`})
    if(dd.weight) dh+=`<div style="margin-top:10px;font-size:12px;color:#666">⚖️ 体重：${dd.weight} kg</div>`
    document.getElementById("dayDetail").innerHTML=dh
  } else {
    document.getElementById("dayDetail").innerHTML='<div class="empty-state"><div>点击日历上的日期查看详情</div></div>'
  }
}
function prevMonth() {
  state.month--; if(state.month<1){state.month=12;state.year--}
  state.selectedDate=""; renderRecord()
}
function nextMonth() {
  const n=new Date()
  if(state.year>n.getFullYear()||(state.year===n.getFullYear()&&state.month>=n.getMonth()+1)) return
  state.month++; if(state.month>12){state.month=1;state.year++}
  state.selectedDate=""; renderRecord()
}
function selectDay(day) {
  state.selectedDate=state.year+"-"+String(state.month).padStart(2,"0")+"-"+String(day).padStart(2,"0")
  renderRecord()
}

// ===== Settings =====
function renderSettings() {
  const st=gst()
  document.getElementById("sCalGoal").value=st.calorieGoal||1500
  document.getElementById("sWeightVal").value=st.weightGoal||""
  document.getElementById("sRemindToggle").checked=st.remindEnabled||false
  document.getElementById("sRemindTime").value=st.remindTime||"10:30"
}
function saveSettingsUI() {
  const goal=parseInt(document.getElementById("sCalGoal").value)||0
  if(goal<=0){showToast("请输入有效热量目标");return}
  sst({
    calorieGoal: goal,
    weightGoal: document.getElementById("sWeightVal").value||"",
    remindEnabled: document.getElementById("sRemindToggle").checked,
    remindTime: document.getElementById("sRemindTime").value
  })
  showToast("✅ 已保存")
}

function clearToday() {
  showDialog("清除今日数据","确定清除今日所有饮食记录？",()=>{
    const t=todayStr(); localStorage.removeItem("day_"+t); renderHome(); showToast("已清除")
  })
}
function clearAll() {
  showDialog("⚠️ 危险操作","确定清除所有数据？此操作无法撤销！",()=>{
    localStorage.clear(); showToast("已清除所有数据"); setTimeout(()=>location.reload(),800)
  })
}

// ===== Init =====
window.onload=function(){
  const n=new Date()
  state={tab:0,year:n.getFullYear(),month:n.getMonth()+1,selectedDate:todayStr()}
  app={foodInput:"",calInput:"",typeIdx:0,editId:"",searchResults:[],showSearch:false,modal:"",overLimit:false,overLimitAmount:0}
  initDemo()
  switchTab(0)
}
