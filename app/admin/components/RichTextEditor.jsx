'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  TextStyle,
  Color,
  FontFamily,
  FontSize,
} from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Minus,
  Link2,
  Unlink,
  Highlighter,
  Undo2,
  Redo2,
  Subscript as SubscriptIcon,
  Superscript as SuperscriptIcon,
  RemoveFormatting,
  ImagePlus,
  Plus,
  Loader2,
  Heading1,
  Heading2,
  Heading3,
  Type,
} from 'lucide-react';

const FONT_FAMILIES = [
  { label: 'Default', value: '' },
  { label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Times New Roman', value: '"Times New Roman", Times, serif' },
  { label: 'Courier New', value: '"Courier New", Courier, monospace' },
  { label: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
  { label: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
  { label: 'Trebuchet MS', value: '"Trebuchet MS", Helvetica, sans-serif' },
];

const FONT_SIZES = [
  { label: 'Size', value: '' },
  { label: '12px', value: '12px' },
  { label: '14px', value: '14px' },
  { label: '16px', value: '16px' },
  { label: '18px', value: '18px' },
  { label: '20px', value: '20px' },
  { label: '24px', value: '24px' },
  { label: '28px', value: '28px' },
  { label: '32px', value: '32px' },
  { label: '36px', value: '36px' },
];

const TEXT_COLORS = [
  '#111827',
  '#374151',
  '#DC2626',
  '#EA580C',
  '#CA8A04',
  '#16A34A',
  '#0D9488',
  '#00B894',
  '#2563EB',
  '#7C3AED',
  '#DB2777',
  '#FFFFFF',
];

const HIGHLIGHT_COLORS = [
  '#FEF08A',
  '#BBF7D0',
  '#A5F3FC',
  '#DDD6FE',
  '#FBCFE8',
  '#FED7AA',
];

const SLASH_ITEMS = [
  {
    id: 'paragraph',
    label: 'Text',
    description: 'Plain paragraph',
    icon: Type,
    command: (editor) => editor.chain().focus().setParagraph().run(),
  },
  {
    id: 'h1',
    label: 'Heading 1',
    description: 'Large section title',
    icon: Heading1,
    command: (editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
  },
  {
    id: 'h2',
    label: 'Heading 2',
    description: 'Medium section title',
    icon: Heading2,
    command: (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
  },
  {
    id: 'h3',
    label: 'Heading 3',
    description: 'Small section title',
    icon: Heading3,
    command: (editor) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
  },
  {
    id: 'bullet',
    label: 'Bullet list',
    description: 'Unordered list',
    icon: List,
    command: (editor) => editor.chain().focus().toggleBulletList().run(),
  },
  {
    id: 'ordered',
    label: 'Numbered list',
    description: 'Ordered list',
    icon: ListOrdered,
    command: (editor) => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    id: 'quote',
    label: 'Quote',
    description: 'Callout blockquote',
    icon: Quote,
    command: (editor) => editor.chain().focus().toggleBlockquote().run(),
  },
  {
    id: 'divider',
    label: 'Divider',
    description: 'Horizontal rule',
    icon: Minus,
    command: (editor) => editor.chain().focus().setHorizontalRule().run(),
  },
  {
    id: 'image',
    label: 'Image',
    description: 'Upload or insert an image',
    icon: ImagePlus,
    command: null,
  },
];

function ToolbarButton({ onClick, active, disabled, title, children }) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md transition ${
        active
          ? 'bg-[#00B894]/15 text-[#00B894]'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      } disabled:cursor-not-allowed disabled:opacity-40`}
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return <span className="mx-0.5 h-6 w-px shrink-0 bg-gray-200" aria-hidden />;
}

function MenuBar({ editor, onInsertImage, uploading }) {
  if (!editor) return null;

  const setLink = () => {
    const previous = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL', previous || 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const currentFont = editor.getAttributes('textStyle').fontFamily || '';
  const currentSize = editor.getAttributes('textStyle').fontSize || '';
  const currentColor = editor.getAttributes('textStyle').color || '#111827';

  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-0.5 border-b border-gray-200 bg-white/95 px-2 py-1.5 backdrop-blur">
      <ToolbarButton
        title="Undo"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
      >
        <Undo2 className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Redo"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
      >
        <Redo2 className="h-4 w-4" />
      </ToolbarButton>

      <ToolbarDivider />

      <select
        title="Heading"
        className="h-8 rounded-md border border-gray-200 bg-white px-1.5 text-xs text-gray-700 outline-none focus:border-[#00B894]"
        value={
          editor.isActive('heading', { level: 1 })
            ? 'h1'
            : editor.isActive('heading', { level: 2 })
              ? 'h2'
              : editor.isActive('heading', { level: 3 })
                ? 'h3'
                : editor.isActive('heading', { level: 4 })
                  ? 'h4'
                  : 'p'
        }
        onChange={(e) => {
          const value = e.target.value;
          const chain = editor.chain().focus();
          if (value === 'p') chain.setParagraph().run();
          else chain.toggleHeading({ level: Number(value.replace('h', '')) }).run();
        }}
      >
        <option value="p">Paragraph</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="h4">Heading 4</option>
      </select>

      <select
        title="Font family"
        className="h-8 max-w-[9rem] rounded-md border border-gray-200 bg-white px-1.5 text-xs text-gray-700 outline-none focus:border-[#00B894]"
        value={currentFont}
        onChange={(e) => {
          const value = e.target.value;
          if (!value) editor.chain().focus().unsetFontFamily().run();
          else editor.chain().focus().setFontFamily(value).run();
        }}
      >
        {FONT_FAMILIES.map((font) => (
          <option key={font.label} value={font.value} style={{ fontFamily: font.value || undefined }}>
            {font.label}
          </option>
        ))}
      </select>

      <select
        title="Font size"
        className="h-8 rounded-md border border-gray-200 bg-white px-1.5 text-xs text-gray-700 outline-none focus:border-[#00B894]"
        value={currentSize}
        onChange={(e) => {
          const value = e.target.value;
          if (!value) editor.chain().focus().unsetFontSize().run();
          else editor.chain().focus().setFontSize(value).run();
        }}
      >
        {FONT_SIZES.map((size) => (
          <option key={size.label} value={size.value}>
            {size.label}
          </option>
        ))}
      </select>

      <ToolbarDivider />

      <ToolbarButton
        title="Bold"
        active={editor.isActive('bold')}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Italic"
        active={editor.isActive('italic')}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Underline"
        active={editor.isActive('underline')}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Strikethrough"
        active={editor.isActive('strike')}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Subscript"
        active={editor.isActive('subscript')}
        onClick={() => editor.chain().focus().toggleSubscript().run()}
      >
        <SubscriptIcon className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Superscript"
        active={editor.isActive('superscript')}
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
      >
        <SuperscriptIcon className="h-4 w-4" />
      </ToolbarButton>

      <ToolbarDivider />

      <label
        title="Text color"
        className="relative inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-gray-100"
      >
        <span
          className="h-4 w-4 rounded-sm border border-gray-300"
          style={{ backgroundColor: currentColor }}
        />
        <input
          type="color"
          value={/^#[0-9A-Fa-f]{6}$/.test(currentColor) ? currentColor : '#111827'}
          className="absolute inset-0 cursor-pointer opacity-0"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        />
      </label>
      <div className="hidden items-center gap-0.5 sm:flex">
        {TEXT_COLORS.map((color) => (
          <button
            key={color}
            type="button"
            title={color}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => editor.chain().focus().setColor(color).run()}
            className="h-4 w-4 rounded-sm border border-gray-300"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <ToolbarButton
        title="Highlight"
        active={editor.isActive('highlight')}
        onClick={() => editor.chain().focus().toggleHighlight({ color: '#FEF08A' }).run()}
      >
        <Highlighter className="h-4 w-4" />
      </ToolbarButton>
      <div className="hidden items-center gap-0.5 md:flex">
        {HIGHLIGHT_COLORS.map((color) => (
          <button
            key={color}
            type="button"
            title={`Highlight ${color}`}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() =>
              editor.chain().focus().toggleHighlight({ color }).run()
            }
            className="h-4 w-4 rounded-sm border border-gray-300"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <ToolbarDivider />

      <ToolbarButton
        title="Align left"
        active={editor.isActive({ textAlign: 'left' })}
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <AlignLeft className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Align center"
        active={editor.isActive({ textAlign: 'center' })}
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <AlignCenter className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Align right"
        active={editor.isActive({ textAlign: 'right' })}
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <AlignRight className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Justify"
        active={editor.isActive({ textAlign: 'justify' })}
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <AlignJustify className="h-4 w-4" />
      </ToolbarButton>

      <ToolbarDivider />

      <ToolbarButton
        title="Bullet list"
        active={editor.isActive('bulletList')}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Numbered list"
        active={editor.isActive('orderedList')}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Quote"
        active={editor.isActive('blockquote')}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Horizontal rule"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <Minus className="h-4 w-4" />
      </ToolbarButton>

      <ToolbarDivider />

      <ToolbarButton
        title="Insert image"
        onClick={onInsertImage}
        disabled={uploading}
      >
        {uploading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ImagePlus className="h-4 w-4" />
        )}
      </ToolbarButton>
      <ToolbarButton
        title="Add link"
        active={editor.isActive('link')}
        onClick={setLink}
      >
        <Link2 className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Remove link"
        disabled={!editor.isActive('link')}
        onClick={() => editor.chain().focus().unsetLink().run()}
      >
        <Unlink className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Clear formatting"
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
      >
        <RemoveFormatting className="h-4 w-4" />
      </ToolbarButton>
    </div>
  );
}

function toEditorHtml(value = '') {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (/^<[a-z][\s\S]*>/i.test(trimmed)) return value;
  return `<p>${value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')}</p>`;
}

async function uploadEditorImage(file) {
  if (!file?.type?.startsWith('image/')) {
    throw new Error('Please choose an image file (JPG, PNG, WEBP, or GIF).');
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Image must be 5MB or smaller.');
  }

  const body = new FormData();
  body.append('file', file);

  const res = await fetch('/api/upload', {
    method: 'POST',
    body,
    credentials: 'same-origin',
  });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || `Upload failed (${res.status})`);
  }
  if (!data.secure_url) {
    throw new Error('Upload succeeded but image URL was missing.');
  }

  return data.secure_url;
}

function collectImageFiles(fileList) {
  return Array.from(fileList || []).filter((f) => f?.type?.startsWith('image/'));
}

export default function RichTextEditor({
  value = '',
  onChange,
  placeholder = 'Start writing, type / for blocks, or paste images…',
  className = '',
}) {
  const fileInputRef = useRef(null);
  const editorRef = useRef(null);
  const savedPosRef = useRef(null);
  const skipSyncRef = useRef(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [slashMenu, setSlashMenu] = useState(null);
  const slashRangeRef = useRef(null);

  const insertImage = useCallback((url, atPos) => {
    const editor = editorRef.current;
    if (!editor || !url) return false;

    const docSize = editor.state.doc.content.size;
    const pos =
      typeof atPos === 'number'
        ? Math.max(1, Math.min(atPos, Math.max(1, docSize - 1)))
        : editor.state.selection.from;

    // IMPORTANT: do NOT chain another insert after setImage — the image is
    // selected after insert, so a follow-up insertContent('<p></p>') replaces it.
    const ok = editor
      .chain()
      .focus()
      .setTextSelection(pos)
      .insertContent({
        type: 'image',
        attrs: { src: url, alt: 'Article image' },
      })
      .run();

    if (!ok) {
      const safeUrl = String(url).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
      return editor
        .chain()
        .focus()
        .insertContent(`<img src="${safeUrl}" alt="Article image" />`)
        .run();
    }

    // Move caret after the image so the user can keep typing.
    try {
      const after = Math.min(editor.state.selection.to + 1, editor.state.doc.content.size);
      editor.commands.setTextSelection(after);
    } catch {
      // ignore caret move failures
    }

    return true;
  }, []);

  const handleImageFiles = useCallback(
    async (files, atPos) => {
      const list = collectImageFiles(files);
      if (!list.length) {
        setUploadError('Please choose an image file (JPG, PNG, WEBP, or GIF).');
        return;
      }

      const editor = editorRef.current;
      if (!editor) {
        setUploadError('Editor is not ready. Click inside the editor and try again.');
        return;
      }

      const startPos =
        typeof atPos === 'number'
          ? atPos
          : savedPosRef.current ?? editor.state.selection.from;

      setUploading(true);
      setUploadError('');

      try {
        let nextPos = startPos;
        for (const file of list) {
          const url = await uploadEditorImage(file);
          skipSyncRef.current = true;
          const ok = insertImage(url, nextPos);
          if (!ok) {
            throw new Error('Image uploaded but could not be inserted. Click in the editor and try again.');
          }
          nextPos = editor.state.selection.from;
          savedPosRef.current = nextPos;
        }
      } catch (err) {
        setUploadError(err.message || 'Image upload failed.');
      } finally {
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    },
    [insertImage]
  );

  const handleImageFilesRef = useRef(handleImageFiles);
  handleImageFilesRef.current = handleImageFiles;

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
        horizontalRule: false,
      }),
      TextStyle,
      Color,
      FontFamily,
      FontSize,
      Underline,
      Subscript,
      Superscript,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[#00B894] underline',
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: {
          class: 'rounded-lg max-w-full h-auto my-4',
        },
      }),
      HorizontalRule,
      Placeholder.configure({ placeholder }),
    ],
    content: toEditorHtml(value),
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base max-w-none min-h-full px-1 py-2 focus:outline-none ' +
          'prose-headings:font-semibold prose-p:my-2 prose-ul:my-2 prose-ol:my-2 ' +
          'prose-img:rounded-lg prose-img:my-4',
      },
      handlePaste: (_view, event) => {
        const files = collectImageFiles(event.clipboardData?.files);
        const items = event.clipboardData?.items;
        if (items) {
          for (const item of items) {
            if (item.type?.startsWith('image/')) {
              const file = item.getAsFile();
              if (file) files.push(file);
            }
          }
        }
        if (!files.length) return false;
        event.preventDefault();
        handleImageFilesRef.current(
          files,
          editorRef.current?.state.selection.from
        );
        return true;
      },
      handleDrop: (view, event) => {
        const files = collectImageFiles(event.dataTransfer?.files);
        if (!files.length) return false;
        event.preventDefault();
        event.stopPropagation();
        const coords = view.posAtCoords({
          left: event.clientX,
          top: event.clientY,
        });
        handleImageFilesRef.current(files, coords?.pos ?? view.state.selection.from);
        return true;
      },
    },
    onCreate: ({ editor: ed }) => {
      editorRef.current = ed;
    },
    onDestroy: () => {
      editorRef.current = null;
    },
    onSelectionUpdate: ({ editor: ed }) => {
      if (ed.isFocused) {
        savedPosRef.current = ed.state.selection.from;
      }
    },
    onUpdate: ({ editor: ed }) => {
      const html = ed.getHTML();
      const empty = ed.isEmpty || html === '<p></p>';
      onChange?.(empty ? '' : html);

      if (ed.isFocused) {
        savedPosRef.current = ed.state.selection.from;
      }

      const { from, to } = ed.state.selection;
      const textBefore = ed.state.doc.textBetween(Math.max(0, from - 32), from, '\n', '\0');
      const slashMatch = textBefore.match(/(?:^|\s)\/([^\s/]*)$/);
      if (slashMatch) {
        const query = slashMatch[1].toLowerCase();
        const filtered = SLASH_ITEMS.filter(
          (item) =>
            item.label.toLowerCase().includes(query) ||
            item.id.includes(query)
        );
        const coords = ed.view.coordsAtPos(from);
        const editorRect = ed.view.dom.getBoundingClientRect();
        slashRangeRef.current = {
          from: from - slashMatch[0].trimStart().length,
          to,
        };
        setSlashMenu({
          query,
          items: filtered,
          top: coords.bottom - editorRect.top + 8,
          left: Math.max(0, coords.left - editorRect.left),
        });
      } else {
        setSlashMenu(null);
        slashRangeRef.current = null;
      }
    },
  });

  useEffect(() => {
    editorRef.current = editor ?? null;
  }, [editor]);

  useEffect(() => {
    if (!editor) return;
    if (skipSyncRef.current) {
      skipSyncRef.current = false;
      return;
    }
    if (uploading) return;
    const current = editor.getHTML();
    const next = toEditorHtml(value);
    const currentEmpty = editor.isEmpty || current === '<p></p>';
    const nextEmpty = !next || next === '<p></p>';
    if (currentEmpty && nextEmpty) return;
    if (current === next) return;
    if (editor.isFocused) return;
    editor.commands.setContent(next || '', { emitUpdate: false });
  }, [value, editor, uploading]);

  const openImagePicker = () => {
    if (editorRef.current) {
      savedPosRef.current = editorRef.current.state.selection.from;
    }
    fileInputRef.current?.click();
  };

  const onFileChange = (e) => {
    const files = e.target.files;
    if (files?.length) {
      handleImageFiles(files, savedPosRef.current);
    }
  };

  const addParagraph = () => {
    if (!editor) return;
    editor.chain().focus().insertContent('<p></p>').run();
  };

  const runSlashItem = (item) => {
    if (!editor) return;
    const range = slashRangeRef.current;
    if (range) {
      editor.chain().focus().deleteRange(range).run();
    }
    setSlashMenu(null);
    slashRangeRef.current = null;
    savedPosRef.current = editor.state.selection.from;

    if (item.id === 'image') {
      openImagePicker();
      return;
    }
    item.command?.(editor);
  };

  return (
    <div className={`relative bg-white ${className}`}>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <MenuBar
          editor={editor}
          onInsertImage={openImagePicker}
          uploading={uploading}
        />
        <div className="admin-rte-scroll relative max-h-[min(60vh,520px)] min-h-[320px] overflow-y-auto overscroll-contain px-3 pb-3 sm:px-4">
          <EditorContent editor={editor} />

          {slashMenu && slashMenu.items.length > 0 && (
            <div
              className="absolute z-20 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg"
              style={{ top: slashMenu.top, left: slashMenu.left }}
            >
              {slashMenu.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => runSlashItem(item)}
                    className="flex w-full items-start gap-3 px-3 py-2 text-left hover:bg-gray-50"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-gray-900">
                        {item.label}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {item.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            if (editorRef.current) {
              savedPosRef.current = editorRef.current.state.selection.from;
            }
          }}
          onClick={addParagraph}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          <Plus className="h-4 w-4" />
          Add text
        </button>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            if (editorRef.current) {
              savedPosRef.current = editorRef.current.state.selection.from;
            }
          }}
          onClick={openImagePicker}
          disabled={uploading}
          className="inline-flex items-center gap-2 rounded-full bg-[#A8E6F0] px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-[#8fd9e6] disabled:opacity-60"
        >
          {uploading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ImagePlus className="h-4 w-4" />
          )}
          {uploading ? 'Uploading…' : 'Add images'}
        </button>
      </div>

      {uploadError && (
        <p className="mt-2 text-sm text-red-600">{uploadError}</p>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        multiple
        className="hidden"
        onChange={onFileChange}
      />

      <style jsx global>{`
        .admin-rte-scroll {
          scrollbar-width: thin;
          scrollbar-color: #94a3b8 #f1f5f9;
        }
        .admin-rte-scroll::-webkit-scrollbar {
          width: 10px;
        }
        .admin-rte-scroll::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 999px;
        }
        .admin-rte-scroll::-webkit-scrollbar-thumb {
          background-color: #94a3b8;
          border-radius: 999px;
          border: 2px solid #f1f5f9;
        }
        .admin-rte-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #64748b;
        }
        .admin-rte-scroll .ProseMirror {
          min-height: 280px;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          color: #9ca3af;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
        .ProseMirror:focus {
          outline: none;
        }
        .ProseMirror h1 {
          font-size: 1.75rem;
          line-height: 1.3;
          margin: 0.75rem 0 0.5rem;
        }
        .ProseMirror h2 {
          font-size: 1.4rem;
          line-height: 1.35;
          margin: 0.7rem 0 0.4rem;
        }
        .ProseMirror h3 {
          font-size: 1.2rem;
          line-height: 1.4;
          margin: 0.6rem 0 0.35rem;
        }
        .ProseMirror h4 {
          font-size: 1.05rem;
          line-height: 1.4;
          margin: 0.5rem 0 0.3rem;
        }
        .ProseMirror ul {
          list-style: disc;
          padding-left: 1.25rem;
        }
        .ProseMirror ol {
          list-style: decimal;
          padding-left: 1.25rem;
        }
        .ProseMirror blockquote {
          border-left: 3px solid #00b894;
          padding-left: 0.85rem;
          color: #4b5563;
          font-style: italic;
        }
        .ProseMirror hr {
          border: none;
          border-top: 1px solid #e5e7eb;
          margin: 1rem 0;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
          display: block;
        }
        .ProseMirror img.ProseMirror-selectednode {
          outline: 2px solid #00b894;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
