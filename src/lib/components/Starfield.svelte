<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let width = 0;
	let height = 0;
	let nodes: Node[] = [];
	let animationId: number;
	let resizeObserver: ResizeObserver;

	interface Node {
		x: number;
		y: number;
		vx: number;
		vy: number;
		radius: number;
	}

	const NODE_COUNT = 70;
	const CONNECTION_DISTANCE = 140;
	const MAX_CONNECTIONS = 4;

	function initNodes() {
		nodes = Array.from({ length: NODE_COUNT }, () => ({
			x: Math.random() * width,
			y: Math.random() * height,
			vx: (Math.random() - 0.5) * 0.4,
			vy: (Math.random() - 0.5) * 0.4,
			radius: Math.random() * 1.5 + 0.5
		}));
	}

	function resize() {
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const rect = canvas.getBoundingClientRect();
		width = rect.width;
		height = rect.height;
		canvas.width = width * dpr;
		canvas.height = height * dpr;
		ctx.scale(dpr, dpr);
	}

	function draw() {
		const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
		ctx.clearRect(0, 0, width, height);

		const nodeColor = isDark ? 'rgba(168, 85, 247, 0.6)' : 'rgba(124, 58, 237, 0.5)';
		const lineColor = isDark ? 'rgba(34, 211, 238, 0.12)' : 'rgba(8, 145, 178, 0.12)';
		const starColor = isDark ? 'rgba(231, 230, 247, 0.35)' : 'rgba(11, 10, 31, 0.25)';

		for (let i = 0; i < nodes.length; i++) {
			const node = nodes[i];
			node.x += node.vx;
			node.y += node.vy;

			if (node.x < 0 || node.x > width) node.vx *= -1;
			if (node.y < 0 || node.y > height) node.vy *= -1;

			ctx.beginPath();
			ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
			ctx.fillStyle = i % 7 === 0 ? starColor : nodeColor;
			ctx.fill();

			// Connect nearby nodes
			let connections = 0;
			for (let j = i + 1; j < nodes.length; j++) {
				if (connections >= MAX_CONNECTIONS) break;
				const other = nodes[j];
				const dx = node.x - other.x;
				const dy = node.y - other.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < CONNECTION_DISTANCE) {
					const opacity = 1 - dist / CONNECTION_DISTANCE;
					const lineBase = isDark ? '34, 211, 238' : '8, 145, 178';
					ctx.beginPath();
					ctx.moveTo(node.x, node.y);
					ctx.lineTo(other.x, other.y);
					ctx.strokeStyle = `rgba(${lineBase}, ${opacity.toFixed(2)})`;
					ctx.lineWidth = 0.8;
					ctx.stroke();
					connections++;
				}
			}
		}

		animationId = requestAnimationFrame(draw);
	}

	onMount(() => {
		const context = canvas.getContext('2d');
		if (!context) return;
		ctx = context;

		resize();
		initNodes();
		resizeObserver = new ResizeObserver(() => {
			resize();
			initNodes();
		});
		resizeObserver.observe(canvas);

		draw();

		return () => {
			cancelAnimationFrame(animationId);
			resizeObserver.disconnect();
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none fixed inset-0 -z-10 h-full w-full"
	aria-hidden="true"
></canvas>
