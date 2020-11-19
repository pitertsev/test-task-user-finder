import { mount } from '@vue/test-utils'
import UserInfo from '../../components/UserInfo'

describe('UsersInfo.vue', () => {
  it('Проверка разметки и содержимого', () => {
    const wrapper = mount(UserInfo, {
      propsData: {
        user: {
          html_url: 'https://github.com/jack',
          login: 'jack',
          reposCount: 25,
          url: '"https://api.github.com/users/jack"'
        }
      }
    })
    expect(wrapper.html().includes("ul")).toBeTruthy()
    expect(wrapper.findAll('li').at(0).text()).toBe("Ссылка на GitHub")
    expect(wrapper.findAll('li').at(1).text()).toBe("Количество публичных репозиториев: 25")
  })
})
