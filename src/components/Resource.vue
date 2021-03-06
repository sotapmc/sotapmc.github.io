<template>
	<div class="resource" @click="download()">
		<span class="material-icons">{{ getIcon() }}</span>
		<div v-if="!isPCView()" class="resource-name-mobile">{{ name }}</div>
		<div class="resource-info" v-if="isPCView()">
			<div class="name">{{ name }}</div>
			<div class="description">
				<span v-if="attribute">{{ attribute }}</span>
				<span v-if="resolution">分辨率 {{ resolution }}</span>
				<span v-if="transparent">透明背景</span>
				<span v-if="cjk > 0">共计 {{ cjk }} 汉字</span>
				<span v-if="lastUpdate">最近更新 {{ lastUpdate }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { isPCView } from "@/functions";
import $ from "jquery";

export default Vue.extend({
	props: ["val", "type"],
	data() {
		return {
			https: true,
			name: "",
			path: "",
			resolution: "",
			transparent: false,
			cjk: 0,
			lastUpdate: "",
			attribute: ""
		};
	},
	methods: {
		download() {
			$.ajax({
				url: "https://static.sotap.dev",
				dataType: "text",
				type: "GET",
				complete: e => {
					console.log(e);
					if (e.statusText == "error") {
						this.https = false;
					}
					window.open((this.https ? "https://static.sotap.dev/" : "	https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/") + this.path);
				}
			});
		},
		getIcon() {
			switch (this.type) {
				case "images":
					return "image";
				case "docs":
					return "description";
				case "project":
					return "code";
				case "server":
					return "insert_drive_file";
				default:
					return "help";
			}
		},
		isPCView
	},
	mounted() {
		let value: ImageFile & DocumentFile = this.val;
		this.name = value.name;
		this.path = value.path;
		this.resolution = value.resolution;
		this.transparent = value.transparent ? true : false;
		this.cjk = value.cjk;
		this.lastUpdate = value.lastUpdate;
		this.attribute = this.path.substr(this.path.lastIndexOf(".") + 1).toUpperCase();
	}
});
</script>

<style lang="less" scoped>
.resource {
	display: flex;
	align-items: center;
	border-radius: 2px;
	border: 1px solid rgba(255, 255, 255, 0.3);
	color: white;
	margin-top: 16px;
	margin-bottom: 16px;
	padding: 8px;
	transition: all 0.2s ease;
	cursor: pointer;

	&:hover {
		border-color: white;
	}

	.material-icons {
		font-size: 64px;

		@media screen and (max-width: 1024px) {
			font-size: 32px;
		}
	}

	.resource-info {
		margin-left: 16px;
		position: relative;
		.name {
			font-weight: bold;
			font-size: 28px;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	.description {
		span {
			&::before {
				content: ", ";
			}

			&:first-child::before {
				content: none;
			}
		}
	}

	.resource-name-mobile {
		font-size: 16px;
		margin-left: 16px;
	}
}
</style>
