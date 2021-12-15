import { mount } from '@vue/test-utils'
import JoinTournamentModal from '@/components/JoinTournamentModal.vue'

describe('JoinTournamentModal.vue', () => {
  it('opens modal on click', () => {

    const expectedDescription = "Signupform This is a testtournament"
    const wrapper = mount(JoinTournamentModal, {
        propsData: {
            modalTournament: {
                tournamentDescription:"This is a testtournament",
                tournamentId:1,
                tournamentOrganisor:"Pepsicle",
            }
        }
    })
    wrapper.find('button.activateModal').trigger('click')

    expect(wrapper.find('div.modal').text()).toContain(expectedDescription)
  })
})
