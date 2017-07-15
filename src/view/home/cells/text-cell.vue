<template>
	<div>
		<div style="background-color: #FFFFFF;border-width: 1px; padding: 40px;">
			<div style="flex-direction: row; justify-content: space-between;" class="border">
				<div class="border" style="flex-direction: row; justify-content: center; align-items: center;  height: 121px;">
					<div style="background-color: #AFDDFF; border-radius: 60px; height: 60px; width: 60px;"></div>
					<div style="margin-left: 20px;">
						<text>比特xxx</text>
						<text>From: ni niu</text>
					</div>
				</div>
				<div class="border" style="justify-content: center; align-items: center; height: 121px;">
					<text>2017-07-15 18:09:35</text>
				</div>
			</div>
			<div style="margin-top: 30px;">
				<text>text ----- - -ex-start：是默认值，所有的 flex 成员项都排列在容器的前部；flex-end：则意味着成员项排列在容器的后部；center：即中间对齐，成员项排列在容器中间、两边留白； space-between：表示两端对齐，空白均匀地填充到 f</text>
			</div>
			<div style="flex-direction: row;">
				<div v-for="v in [1,2,3]" class="border" style="flex: 1; margin-top: 30px;">
					<div style="flex-direction: row;  height: 100px; justify-content: center; align-items: center;">
						<div style="width: 50px; height: 50px; background-color: #0088FB;margin-right: 5px;"></div>
						<text>5</text>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
.border {
	border-width: 1px;
}
</style>