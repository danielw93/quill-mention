import Quill from 'quill';

const Parchment = Quill.import('parchment');
const Link = Quill.import('formats/link');

const ProfileId = new Parchment.Attributor.Attribute('profileid', 'profileid');
Parchment.register(ProfileId);

class MentionBlot extends Link {
	static create(data) {
		const node = super.create(data.link);
		ProfileId.add(node, data.id);
		node.setAttribute('href', data.link);
		node.setAttribute('target', data.target);
		node.removeAttribute('rel');
		return node;
	}
}

MentionBlot.blotName = 'mention';
MentionBlot.tagName = 'a';
MentionBlot.className = 'mention';

Quill.register('formats/mention', MentionBlot);
