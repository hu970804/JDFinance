<template lang="html">
    <swiper :options="swiperOption" :class="$style.content">
        <swiper-slide v-for="item in items" :key="item.title" :class="$style.item">
            <img :src="item.src" :alt="item.title">
            <p>{{ item.title }}</p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"/>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    data() {
        return {
            items: [{
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90",
                title: "机票",
            }, {
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t21325/4/2066194110/3552/8e11af7b/5b45b595Na2f43d34.png?width=90&height=90",
                title: "租房",
            }, {
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
                title: "房抵贷",
            }, {
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
                title: "分期用",
            }, {
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t20182/61/1301593180/9560/df0c6362/5b247663Nc83d2060.jpg?width=90&height=90",
                title: "分期商城",
            }, {
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90",
                title: "教育",
            }, {
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90",
                title: "车险",
            }, {
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88",
                title: "家装",
            }, {
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
                title: "医美",
            }, {
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
                title: "驾校",
            }],
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 30,
                slidesPerGroup: 5,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
        }
    },
}
</script>

<style lang="scss" module>
.content {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    padding:0 26px 17px;
    .item {
        text-align: center;
        img {
            width: 77px;
            height: 77px;
            margin-bottom: 17px;
        }
        p {
            font-size: 22px;
            color: #333;
        }
    }
}
</style>
