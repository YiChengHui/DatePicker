    let time = new Date(),
        dateArray = new Array(180).fill(0),
        oneDay = 86400000,
        categroy = {};
    dateArray.forEach((item, index) => {
        let date = new Date(Date.parse(new Date(time)) + oneDay * index);
        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
        let temp = `${year}-${month}-${day}`;
        if (!categroy[`${year}-${month}`]) {
            categroy[`${year}-${month}`] = [];
            let week = new Date(temp).getDay();
            for (let i = 0; i < week; i++) {
                categroy[`${year}-${month}`].push("")
            }
        }
        categroy[`${year}-${month}`].push(temp);
    })

    let MonthArray = Object.keys(categroy),
        DayArray = Object.values(categroy),
        WeekArray = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"];

    let ComponentObj = {
        props: {
            value: {
                type: String,
                default: ""
            }
        },
        template: `<div class="date-picker-content">
                        <div v-for="(item,index) in MonthArray" :key="index">
                            <p>{{item}}</p>
                            <ul class="clearfix">
                                <li v-for="(weekItem,weekIndex) in WeekArray" :key="weekIndex">{{weekItem}}</li>
                            </ul>
                            <ul class="clearfix">
                                <li v-for="(dayItem,dayIndex) in DayArray[index]" :key="dayIndex">
                                    <span v-if="dayItem" @click="DateClick(dayItem)" :class="{'active':dayItem==SelectDate}">
                                        {{dayItem}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>`,
        data() {
            return {
                MonthArray,
                DayArray,
                WeekArray,
                SelectDate: ""
            }
        },
        watch: {
            SelectDate(newVal) {
                this.SelectDate = newVal
            }
        },
        methods: {
            DateClick(value) {
                this.SelectDate = value
                this.$emit("input", value)
            }
        }
    }

    export const DatePicker = {
        install(Vue, options) {
            /**
             * ComponentObj是一个vue组件对象
            */
            Vue.component("DatePicker", ComponentObj)
        }
    }
