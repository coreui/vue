import { mount } from '@vue/test-utils'
import Component from '../CWidget05'
//TODO: render child component

const ComponentName = 'CWidget05'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  context:{
    props: {
      text: 'test',
      header: 'test',
      iconClasses: 'icon-custom',
      variant: 'info',
      value: 35,
      inverse: true
    }
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is functional component', () => {
    expect(defaultWrapper.isFunctionalComponent).toBe(true)
  })
  // it('correctly render component with default props', () => {
  //   expect(defaultWrapper.findAll('div').at(0).attributes().class).toMatch('card')
  //   expect(defaultWrapper.findAll('div').at(3).text()).toMatch('header:string')
  //   expect(defaultWrapper.find('small').text()).toMatch('text:string')
  //   expect(defaultWrapper.find('cprogress-stub').exists()).toBe(true)
  //   expect(defaultWrapper.find('cprogress-stub').attributes().color).toBe('success')
  //   expect(defaultWrapper.find('cprogress-stub').attributes().class).toBe('progress-xs my-3 mb-0')
  //   expect(defaultWrapper.find('cprogress-stub').attributes().value).toBe('25')
  // })
  it('matches default props snapshot', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  // it('correctly render component with custom props', () => {
  //   expect(customWrapper.findAll('div').at(0).attributes().class).toMatch('card text-white bg-info')
  //   expect(customWrapper.findAll('div').at(3).text()).toMatch('test')
  //   expect(customWrapper.find('small').text()).toMatch('test')
  //   expect(customWrapper.find('cprogress-stub').exists()).toBe(true)
  //   expect(customWrapper.find('cprogress-stub').attributes().color).toBe('')
  //   expect(customWrapper.find('cprogress-stub').attributes().class).toBe('progress-xs my-3 mb-0 progress-white')
  //   expect(customWrapper.find('cprogress-stub').attributes().value).toBe('35')
  // })
  it('matches custom props snapshot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
