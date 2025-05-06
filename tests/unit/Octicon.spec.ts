import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Octicon from '@/components/Octicon.vue'
import * as octicons from '@primer/octicons';

const octiconNames = [
  'apps', 'calendar', 'check', 'clock', 'code-square',
  'columns', 'container', 'copy', 'dot-fill', 'goal',
  'globe', 'graph', 'history', 'home', 'horizontal-rule',
  'issue-closed', 'issue-draft', 'issue-opened', 'key-asterisk', 'north-star',
  'question', 'rows', 'server', 'sparkle-fill', 'stack',
  'stopwatch', 'strikethrough', 'sun', 'triangle-right', 'versions',
  'x-circle', 'x-circle-fill'
]

describe('Octicon.vue', () => {
  it('renders correct SVG with given props', () => {
    let wrapper = mount(Octicon, {
      props: {
        name: 'people',
        customClass: 'my-class',
        width: 32,
        height: 32,
      },
    })
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
    expect(svg.attributes('width')).toBe('32')
    expect(svg.attributes('height')).toBe('32')
    expect(svg.classes()).toContain('octicon')
    expect(svg.classes()).toContain('octicon-people')
    expect(svg.classes()).toContain('my-class')
    expect(svg.html()).toContain('path')
  })

  octiconNames.forEach(name => {
    it(`renders class octicon-${name} when name="${name}" and its correct path elements`, () => {
      let wrapper = mount(Octicon, { props: { name } })
      const svg = wrapper.find('svg')
      expect(svg.classes()).toContain(`octicon-${name}`)

      let octiconPath = octicons[name].heights['16'].path;
      const expectedPaths = octicons[name].heights['16'].path
          .match(/<path[^>]*>.*?<\/path>/g) || []
      const renderedPaths = svg.element.innerHTML
      // each expected path is contained in the svg innerHTML
      expectedPaths.forEach(pathStr => {
          expect(renderedPaths).toContain(pathStr)
      })
    })
  })
})
