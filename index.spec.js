import { expect } from 'expect'
import { toMatchImageSnapshot } from 'expect-mocha-image-snapshot'
import toMatchSnapshot from 'expect-mocha-snapshot'
import sharp from 'sharp'

expect.extend({ toMatchSnapshot })
expect.extend({ toMatchImageSnapshot })

export default {
	foo() {
		expect('blabla').toMatchSnapshot(this)
	},
	async bar() {
		const img = await sharp({
			create: {
				background: { b: 0, g: 255, r: 0 },
				channels: 3,
				height: 48,
				width: 48,
			},
		})
			.png()
			.toBuffer()
		expect(img).toMatchImageSnapshot(this)
	},
}
